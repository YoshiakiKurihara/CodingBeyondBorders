// app/components/LeftSidebarWrapper.tsx
import { FetchedPage } from '../lib/notion-api';
import { fetchAllLatestItems } from '@/app/lib/notion-api';
import LeftSidebar from './LeftSidebar';

export default async function LeftSidebarWrapper() {
    const items : FetchedPage[] = await fetchAllLatestItems()

    return <LeftSidebar items={items} />
}