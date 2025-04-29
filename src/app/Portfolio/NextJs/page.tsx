import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_NextJs() {

  return (
    getBlogPosts(MessageText.TITLE_PORTFOLIO_NEXTJS, process.env.NOTION_PORT_NEXTJS_DATABASE_ID as string)
  )
}
