import { getBlogPosts } from '@/app/lib/notion-renderer'
import { MessageText } from '../../components/messages/Messages'

export default async function Experience_Python() {

  return (
    getBlogPosts(MessageText.TITLE_EXPERIENCE_PYTHON, process.env.NOTION_EXP_PYTHON_DATABASE_ID as string)
  )
}
