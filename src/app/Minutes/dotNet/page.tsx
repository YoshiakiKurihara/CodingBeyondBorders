import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_dotNet() {

  return (
    getBlogPosts(MessageText.TITLE_DISCUSSION_DOTNET, process.env.NOTION_DISC_dotNET_DATABASE_ID as string)
  )
}
