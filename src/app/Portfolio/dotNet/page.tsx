import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_dotNet() {

  return (
    getBlogPosts(MessageText.TITLE_PORTFOLIO_DOTNET, process.env.NOTION_PORT_DOTNET_DATABASE_ID as string)
  )
}
