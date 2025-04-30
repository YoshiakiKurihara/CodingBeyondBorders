import { getBlogDetails } from '@/app/lib/notion-renderer'

// ✅ props 全体を await して params を取り出す（Next.js バグ対策）
export default async function Experience_Items_ReactTarui(props: { params: { id: string } }) {
  const { params } = await props;
  const content = await getBlogDetails(params.id);
  return content;
}

export const revalidate = 30 // 0.5分（秒で指定）
