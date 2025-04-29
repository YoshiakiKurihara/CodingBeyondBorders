import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_NextJs() {

  return (
    getBlogPosts(MessageText.TITLE_EXPERIENCE_NEXTJS, process.env.NOTION_EXP_NEXTJS_DATABASE_ID as string)
  )
}
