import { ReactNode } from 'react'
import Zoom from 'react-medium-image-zoom'
import Image from 'next/image';
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlockObjectResponse, PageObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { notion, getPage, getBlocks, fetchBlockChildren } from '@/app/lib/notion-api'
import { isFullPage } from '@notionhq/client'
import { css } from   '../../../styled-system/css';

// rich_textをマークアップ付きでレンダリングする関数
export function renderRichText(richTexts: RichTextItemResponse[]): ReactNode[] {
    return richTexts.map((text, index) => {
        let content: ReactNode = text.plain_text;

        if (text.href) {
        content = <a key={index} href={text.href} className="text-blue-500 underline">{content}</a>;
        }
        if (text.annotations.bold) {
        content = <strong key={index}>{content}</strong>;
        }
        if (text.annotations.italic) {
        content = <em key={index}>{content}</em>;
        }
        if (text.annotations.underline) {
        content = <u key={index}>{content}</u>;
        }
        if (text.annotations.strikethrough) {
        content = <s key={index}>{content}</s>;
        }
        if (text.annotations.code) {
        content = <code key={index} className="bg-gray-100 p-1 rounded">{content}</code>;
        }

        return content;
    });
}

// NotionのAPIレスポンスの型定義
interface BlogPost {
    id: string
    title: string
    date: string
}

export async function getBlogPosts(titleMessage: string, databaseId: string) {
    const posts : BlogPost[] = await getBlogPostsInfo(databaseId)

    return (
        <>
        <h1>{titleMessage}</h1>
        <div className="prose mx-auto py-10">
        <ul>
        {posts.length === 0 ? (
            <li>公開されている記事はありません。</li>
        ) : (
            posts.map((post) => (
            <li key={post.id}>
                <Link className={css({mt:5})} href={`./ReactTauri/${post.id}`}>
                <div className={css({mt:5})}>{post.title}</div>
                </Link>
                <div className="text-sm text-gray-500 mb:10px">{post.date}</div>
            </li>
            ))
        )}
        </ul>
    </div>
    </>
    )
}
  // Notionからブログ記事リストを取得
async function getBlogPostsInfo(databaseId: string): Promise<BlogPost[]> {

    // console.log('Notion Token:', process.env.NOTION_TOKEN)
    // console.log('Notion Token:', process.env.NOTION_DATABASE_ID)

    const response = await notion.databases.query(
        { database_id: databaseId,
        filter: {
            property: 'Published',
            checkbox: {
            equals: true,
            },
        },
        })

    // `response.results` は `PageObjectResponse[]`型
    //const results: PageObjectResponse[] = response.results
    const results = response.results.filter((page): page is PageObjectResponse => isFullPage(page))

    return results.map((page: PageObjectResponse) => {
        const property = page.properties["title"];
        // タイトルプロパティの型を確認
        let title = '';
        if (property.type === "title" && property.title.length > 0) {
        title = property.title[0].plain_text;
        } else {
        title = '無題';
        }
        // const title = page.properties?.title?.title[0].plain_text || '無題'
        const date = new Date(page.last_edited_time).toLocaleString(
                    "en-US",
                    {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                    })
        
        // タイトルが無い場合、ログに出力して対処
        if (!title) {
            console.warn('No title found for page:', page.id)
        }

        return {
            id: page.id,
            title,
            date,
        }
    })
    
}

export async function getBlogDetails({ params }: { params: { id: string } }) {
    const { id } = await params;
    
    const page = await getPage(id);

    if (!page) {
        notFound()
    }

    const blocks = await getBlocks(params.id)

    const property = page.properties["title"];

    // タイトルプロパティの型を確認
    let title = '';
    if (property?.type === "title" && property.title.length > 0) {
    title = property.title[0].plain_text;
    } else {
    title = '無題';
    }
    // const title = page.properties.Title?.title[0]?.plain_text || '無題'
    const date = new Date(page.last_edited_time).toLocaleString(
        "en-US",
        {
        month: "short",
        day: "2-digit",
        year: "numeric",
        })

    return (
        <div className="prose mx-auto py-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">{date}</p>

        <div className="mt-8">
            <RenderBlocks blocks={blocks} />
        </div>
        </div>
    )
}

// ブロックを簡単にレンダリングするコンポーネント
export async function RenderBlocks({ blocks }: { blocks: BlockObjectResponse[] }) {
return (
    <div className="prose max-w-3xl mx-auto">
    {await Promise.all(blocks.map(async (block) => {
        let children: BlockObjectResponse[] = [];

        if (block.has_children) {
        children = await fetchBlockChildren(block.id);
        }

        console.log('Block:', block.type);

        switch (block.type) {
        case 'paragraph':
            return (
            <div key={block.id}>
                <p>{renderRichText(block.paragraph.rich_text)}</p>
                {children.length > 0 && <RenderBlocks blocks={children} />}
            </div>
            );

        case 'heading_1':
            return (
            <h1 key={block.id}>
                {renderRichText(block.heading_1.rich_text)}
            </h1>
            );

        case 'heading_2':
            return (
            <h2 key={block.id}>
                {renderRichText(block.heading_2.rich_text)}
            </h2>
            );

        case 'heading_3':
            return (
            <h3 key={block.id}>
                {renderRichText(block.heading_3.rich_text)}
            </h3>
            );

        case 'bulleted_list_item':
            return (
            <ul key={block.id} className="list-disc ml-6">
                <li>
                {renderRichText(block.bulleted_list_item.rich_text)}
                {children.length > 0 && <RenderBlocks blocks={children} />}
                </li>
            </ul>
            );

        case 'numbered_list_item':
            return (
            <ol key={block.id} className="list-decimal ml-6">
                <li>
                {renderRichText(block.numbered_list_item.rich_text)}
                {children.length > 0 && <RenderBlocks blocks={children} />}
                </li>
            </ol>
            );

        case 'to_do':
            return (
            <div key={block.id} className="flex items-center space-x-2">
                <input type="checkbox" checked={block.to_do.checked} readOnly />
                <span>{renderRichText(block.to_do.rich_text)}</span>
                {children.length > 0 && <RenderBlocks blocks={children} />}
            </div>
            );

        case 'quote':
            return (
            <blockquote key={block.id} className="border-l-4 pl-4 italic text-gray-600">
                {renderRichText(block.quote.rich_text)}
                {children.length > 0 && <RenderBlocks blocks={children} />}
            </blockquote>
            );

        case 'code':
            return (
            <pre key={block.id} className="bg-gray-100 p-4 rounded">
                <code>{renderRichText(block.code.rich_text)}</code>
            </pre>
            );

        case 'image':
            let url = '';
            let imageWidth = 150; // デフォルトの幅
            let imageHeight = 100; // デフォルトの高さ
            const caption = block.image.caption?.[0]?.plain_text || 'Image';

            if (block.image.type === 'external') {
            // 'external'タイプの画像の場合
            url = block.image.external.url;
            } else if (block.image.type === 'file' && block.image.file) {
            // 'file'タイプの画像の場合
            url = block.image.file.url;
            // 画像のサイズ（もしあれば）を取得
            imageWidth = block.image.file.width || imageWidth;
            imageHeight = block.image.file.height || imageHeight;
            }

            console.log('Image :', block.image);

            return (
            <figure key={block.id}>
                <Zoom>
                <Image 
                    src={url} 
                    alt={caption} 
                    width={imageWidth} // Notionで指定された幅
                    height={imageHeight} // Notionで指定された高さ
                    objectFit="cover" // 画像が枠に収まるように
                    quality={75} // 画像の最適化のための品質設定（必要に応じて調整）
                />
                </Zoom>
                {caption && <figcaption className="text-center text-sm text-gray-500">{caption}</figcaption>}
            </figure>
            );

        case 'divider':
            return <hr key={block.id} className="my-8" />;

            case 'column_list':
            const columnBlocks = await Promise.all(children.map(async (child) => {
                if (child.type !== 'column') return null;
                const columnChildren = await fetchBlockChildren(child.id);
                return (
                <div key={child.id} className="flex-1">
                    <RenderBlocks blocks={columnChildren} />
                </div>
                );
            }));
            
            return (
                <div key={block.id} className="flex flex-col md:flex-row gap-4">
                {columnBlocks}
                </div>
            );

        default:
            return (
            <div key={block.id} className="text-gray-400 italic">
                未対応ブロック（{block.type}）
            </div>
            );
        }
    }))}
    </div>
);
}