import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_Python() {

  return (
    getBlogPosts(MessageText.TITLE_PORTFOLIO_PYTHON, process.env.NOTION_PORT_PYTHON_DATABASE_ID as string)
  )
}
