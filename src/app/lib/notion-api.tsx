import { cache } from 'react'
import { Client, isFullPage, isFullBlock } from '@notionhq/client'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

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