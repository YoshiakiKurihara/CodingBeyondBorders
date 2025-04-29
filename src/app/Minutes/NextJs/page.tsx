import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_NextJs() {

  return (
    getBlogPosts(MessageText.TITLE_DISCUSSION_NEXTJS, process.env.NOTION_DISC_NEXTJS_DATABASE_ID as string)
  )
}
