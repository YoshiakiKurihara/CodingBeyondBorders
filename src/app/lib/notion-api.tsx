import { cache } from 'react'
import { Client, isFullPage, isFullBlock } from '@notionhq/client'
import { BlockObjectResponse, GetDatabaseResponse, PageObjectResponse, RichTextItemResponse} from '@notionhq/client/build/src/api-endpoints'

// Notionクライアント初期化
export const notion = new Client({ auth: process.env.NOTION_TOKEN })

// 記事1件を取得する関数
export const getPage = cache(async (id: string) => {
    try {
        const page = await notion.pages.retrieve({ page_id: id })

        if (!isFullPage(page)) {
            throw new Error('ページが完全ではありません')
        }

        return page
    } catch (error) {
        console.error('ページ取得エラー:', error)
        return null
    }
})

// ページに紐づくブロック(本文)を取得する関数
export const getBlocks = cache(async (id: string) => {
    try {
        const response = await notion.blocks.children.list({ block_id: id })

    const blocks = response.results.filter((block): block is BlockObjectResponse =>
            isFullBlock(block)
        )

        return blocks
    } catch (error) {
        console.error('ブロック取得エラー:', error)
        return []
    }
})

export async function fetchBlockChildren(blockId: string): Promise<BlockObjectResponse[]> {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const response = await notion.blocks.children.list({
        block_id: blockId,
    });

    return response.results.filter((block): block is BlockObjectResponse => block.object === 'block');
}

/**
 * title プロパティ（title型）を自動で抽出し、最初のテキストを返す
 */
export function extractTitle(page: PageObjectResponse): string {
    const props = page.properties;

    for (const key in props) {
        const prop = props[key];
        // title型のプロパティを見つけたら、その値を返す
        if (prop.type === 'title' && prop.title.length > 0) {
            return prop.title.map((t: RichTextItemResponse) => t.plain_text).join('');
        }
    }

    return 'No title';
}

export type FetchedPage = {
    id: string;
    lastEdited: string;
    title: string;
    description: string;
};

type MyDatabaseResponse = GetDatabaseResponse & {
    description: Array<{ plain_text: string }>;
};

export async function fetchLatestItemsFromDB(databaseId: string, limit: number = 5): Promise<FetchedPage[]> {
    const res = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
            timestamp: 'last_edited_time',
            direction: 'descending',
            },
        ],
        page_size: limit,
    });

    const response = await notion.databases.retrieve({ database_id: databaseId }) as MyDatabaseResponse;
    const description = response.description.map((d) => d.plain_text).join('') || 'No description';


    return res.results
            .filter(isFullPage)
            .map((page) => ({
                id: page.id,
                lastEdited: page.last_edited_time,
                title: extractTitle(page) ?? 'No title',
                description,
            }));
}

export async function fetchAllLatestItems(): Promise<FetchedPage[]> {
    const dbIds = [
        process.env.NOTION_EXP_PYTHON_DATABASE_ID!,
        process.env.NOTION_EXP_DOTNET_DATABASE_ID!,
        process.env.NOTION_EXP_NEXTJS_DATABASE_ID!,
        process.env.NOTION_EXP_REACTNATIVE_DATABASE_ID!,
        process.env.NOTION_EXP_REACTTAURI_DATABASE_ID!,
        process.env.NOTION_PORT_PYTHON_DATABASE_ID!,
        process.env.NOTION_PORT_DOTNET_DATABASE_ID!,
        process.env.NOTION_PORT_NEXTJS_DATABASE_ID!,
        process.env.NOTION_PORT_REACTNATIVE_DATABASE_ID!,
        process.env.NOTION_PORT_REACTTAURI_DATABASE_ID!,
        process.env.NOTION_DISC_PYTHON_DATABASE_ID!,
        process.env.NOTION_DISC_DOTNET_DATABASE_ID!,
        process.env.NOTION_DISC_NEXTJS_DATABASE_ID!,
        process.env.NOTION_DISC_REACTNATIVE_DATABASE_ID!,
        process.env.NOTION_DISC_REACTTAURI_DATABASE_ID!,
    ];

    const allItems = await Promise.all(dbIds.map((id) => fetchLatestItemsFromDB(id, 5)));

    const merged = allItems.flat();

    return merged.sort((a, b) =>
        new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
    ).slice(0, 5);
}
