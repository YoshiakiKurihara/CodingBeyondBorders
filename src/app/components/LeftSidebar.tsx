'use client';
// React/Next.js Standard Libraries
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import 'react-medium-image-zoom/dist/styles.css'
// React/Next.js Third Party Libraries
import Zoom from 'react-medium-image-zoom'

// Custom Components/Libraries
import { useLanguage } from '../contexts/LanguageContext';
import {　MessageText} from './messages/Messages';
import { FetchedPage } from '@/app/lib/notion-api'


function LeftSidebar({ items }: { items: FetchedPage[] }) {
    // Language Context
    const { state } = useLanguage();

    const pathname = usePathname();
    const isAuthPage = pathname.startsWith('/Contact') || pathname.startsWith('/Experience') || pathname.startsWith('/Minutes') || pathname.startsWith('/Portfolio');
    
    if (isAuthPage) {
        return (
            <div className="flex flex-col items-center">
                <Zoom>
                    <Image src="/images/profile_picture.png" width={150} height={0} style={{ height: 'auto' }} alt="Profile picture" />
                </Zoom>
                <div className="text-center p-1.5">
                    <h3 className="m-0 p-1.5 text-sm">
                        {state.language === 'ja' ? MessageText.PORTFOLIO_NAME_JP : MessageText.PORTFOLIO_NAME_EN}
                    </h3>
                    <p className="m-0 p-1.5 text-xs">
                        {state.language === 'ja' ? MessageText.PORTFOLIO_TITLE_JP : MessageText.PORTFOLIO_TITLE_EN}
                    </p>
                </div>
                <div className="flex flex-row items-center">
                    <Link href="https://www.linkedin.com/in/yoshiakikurihara/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/LI-In-Bug.png" width={30} height={0} style={{ width: 'auto', height: 'auto' }} alt="LinkedIn" className="m-2" />
                    </Link>
                    <Link href="https://github.com/YoshiakiKurihara" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/github-mark-white.png" width={30} height={0} style={{ width: 'auto', height: 'auto' }} alt="GitHub" className="m-2" />
                    </Link>
                </div>
                <div className="text-left p-1.5 text-xs">
                    <p>
                    {state.language === 'ja' ? MessageText.PORTFOLIO_INTRO_JP : MessageText.PORTFOLIO_INTRO_EN}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h2 className="m-2">{state.language === 'ja' ? MessageText.LATEST_JP : MessageText.LATEST_EN}</h2>
                <ul className="space-y-2">
                    {items.map((item) => (
                    <li key={item.id} className="text-xs m-0 p-2 border border-gray-300 rounded-md">
                        <span className="font-semibold">{item.title}</span>
                        <br />
                        <span className="text-sm text-gray-500">
                        {state.language === 'ja' ? MessageText.UPDATE_JP : MessageText.UPDATE_EN}: {new Date(item.lastEdited).toLocaleString()}/{state.language === 'ja' ? MessageText.ARTICLE_JP : MessageText.ARTICLE_EN}: {item.description}...
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default LeftSidebar;