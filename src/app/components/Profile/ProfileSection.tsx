'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { Credential } from "../messages/Messages";

export const ProfileSection = () => {
    const { state } = useLanguage();

    return (
    <div className="w-full max-w-[600px] p-2.5 md:p-4 box-border">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <div className="w-[150px] md:w-[200px]">
                <Image src="/images/profile_picture.png" alt="Profile picture" height={200}
                    width={1}
                    style={{ width: "auto", height: "200px" }}
                    sizes="(max-width: 768px) 150px, 200px"/>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-2.5 text-sm md:text-base font-bold leading-tight">
                    <p>{Credential.nameJa} ({Credential.nameEn})</p>
                    <p>{state.language === 'ja' ? Credential.titleJa : Credential.titleEn}</p>
                </div>
                <div className="p-2.5 text-sm md:text-base leading-tight">
                    <p>{state.language === 'ja' ? Credential.line1Ja : Credential.line1En}</p>
                    <p>{state.language === 'ja' ? Credential.line2Ja : Credential.line2En}</p>
                </div>
                <div className="flex gap-4 mt-2">
                    <Link href="https://www.linkedin.com/in/yoshiakikurihara/" >
                        <Image src="/images/LI-In-Bug.png" width={50} height={50} alt="LinkedIn" />
                    </Link>
                    <Link href="https://github.com/YoshiakiKurihara" >
                        <Image src="/images/github-mark-white.png" width={50} height={50} alt="GitHub" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}; 