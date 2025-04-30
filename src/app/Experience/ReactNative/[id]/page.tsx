import { getBlogDetails } from '@/app/lib/notion-renderer'

// ページコンポーネント
export default async function Experience_Items_ReactNative({ params }: { params: { id: string } }) {
  return getBlogDetails(params.id);
}

export const revalidate = 30 // 0.5分（秒で指定）

