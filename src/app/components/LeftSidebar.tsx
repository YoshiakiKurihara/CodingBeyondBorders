'use client';
// React/Next.js Standard Libraries
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import 'react-medium-image-zoom/dist/styles.css'
// React/Next.js Third Party Libraries
import Zoom from 'react-medium-image-zoom'
// CSS Libraries
import { css } from   '../../../styled-system/css';
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
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', })}>
                <Zoom>
                    <Image src="/images/profile_picture.png" width={150} height={0} style={{ height: 'auto' }} alt="Profile picture" />
                </Zoom>
                <div className={css({ textAlign: 'center', padding: '5px', })}>
                    <h3 className={css({ margin: '0', padding: '5px', fontSize: 's',})}>
                        {state.language === 'ja' ? MessageText.PORTFOLIO_NAME_JP : MessageText.PORTFOLIO_NAME_EN}
                    </h3>
                    <p className={css({ margin: '0', padding: '5px', fontSize: 'xs',})}>
                        {state.language === 'ja' ? MessageText.PORTFOLIO_TITLE_JP : MessageText.PORTFOLIO_TITLE_EN}
                    </p>
                </div>
                <div className={css({ display: 'flex', flexDirection: 'row', alignItems: 'center', })}>
                    <Link href="https://www.linkedin.com/in/yoshiakikurihara/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/LI-In-Bug.png" width={30} height={0} style={{ width: 'auto', height: 'auto' }} alt="LinkedIn" className={css({ margin: '2', })} />
                    </Link>
                    <Image src="/images/github-mark-white.png" width={30} height={0} style={{ width: 'auto', height: 'auto' }} alt="GitHub" className={css({ margin: '2', })} />
                    {/* <Image src="/images/logo-white.png" width={30} height={0} style={{ width: 'auto', height: 'auto' }} alt="X-Twitter" className={css({ margin: '2', })} /> */}
                </div>
                <div className={css({ textAlign: 'left', padding: '5px', fontSize: 'xs', })}>
                    <p>
                    {state.language === 'ja' ? MessageText.PORTFOLIO_INTRO_JP : MessageText.PORTFOLIO_INTRO_EN}
                    </p>
                </div>
            </div>
        );
    }else {
        return (
            <div>
                <h2 className={css({ m:2 })}>{state.language === 'ja' ? MessageText.LATEST_JP : MessageText.LATEST_EN}</h2>
                <ul className="space-y-2">
                    {items.map((item) => (
                    <li key={item.id} className={css({fontSize: 'xs', m:0, p:2, border: '0.5px solid', borderColor: 'gray.300', borderRadius: 'md',})}>
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