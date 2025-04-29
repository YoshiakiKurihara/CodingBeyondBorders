import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_ReactTauri() {

  return (
    getBlogPosts(MessageText.TITLE_EXPERIENCE_REACTTAURI, process.env.NOTION_EXP_REACTTAURI_DATABASE_ID as string)
  )
}
