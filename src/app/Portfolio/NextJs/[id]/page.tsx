import { getBlogDetails } from '@/app/lib/notion-renderer'

// ページコンポーネント
export default async function Experience_Items_NextJs({ params }: { params: { id: string } }) {
  return getBlogDetails(params.id);
}

// ISR設定 (5分ごと再生成)
export const revalidate = 15
