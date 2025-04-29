import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_ReactNative() {

  return (
    getBlogPosts(MessageText.TITLE_PORTFOLIO_REACTNATIVE, process.env.NOTION_PORT_REACTNATIVE_DATABASE_ID as string)
  )
}
