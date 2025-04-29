import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_ReactNative() {

  return (
    getBlogPosts(MessageText.TITLE_DISCUSSION_REACTNATIVE, process.env.NOTION_DISC_REACTNATIVE_DATABASE_ID as string)
  )
}
