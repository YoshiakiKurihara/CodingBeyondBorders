import Link from 'next/link'
import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_NextJs() {

  const posts = await getBlogPosts(process.env.NOTION_DISC_NEXTJS_DATABASE_ID as string)
  return (
    <>
      <h1>{MessageText.TITLE_DISCUSSION_NEXTJS}</h1>
      <div className="prose mx-auto py-10">
        <ul>
        {posts.length === 0 ? (
            <li>公開されている記事はありません。</li>
        ) : (
            posts.map((post) => (
            <li key={post.id}>
                <Link className="mt-5" href={`./NextJs/${post.id}`}>
                <div className="mt-5">{post.title}</div>
                </Link>
                <div className="text-sm text-gray-500 mb-2.5">{post.date}</div>
            </li>
            ))
        )}
        </ul>
      </div> 
    </>
  )

  /* return (
    getBlogPosts(MessageText.TITLE_DISCUSSION_NEXTJS, process.env.NOTION_DISC_NEXTJS_DATABASE_ID as string)
  ) */
}
