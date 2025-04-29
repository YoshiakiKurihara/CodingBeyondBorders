import { getBlogDetails } from '@/app/lib/notion-renderer'

// ページコンポーネント
export default async function Experience_Items_ReactNative({ params }: { params: { id: string } }) {
  return (
    getBlogDetails({ params } as { params: { id: string } } ) // propsを渡す
  )
}

// ISR設定 (5分ごと再生成)
export const revalidate = 15
