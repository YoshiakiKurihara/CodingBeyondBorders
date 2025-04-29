import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_ReactTauri() {

  return (
    getBlogPosts(MessageText.TITLE_PORTFOLIO_REACTTAURI, process.env.NOTION_PORT_REACTTAURI_DATABASE_ID as string)
  )
}
