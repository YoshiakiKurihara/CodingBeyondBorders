'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { Credential } from "../messages/Messages";
import "./ProfileSection.css";

export const ProfileSection = () => {
    const { state } = useLanguage();

    return (
    <div className="profile">
        <div className="profile-picture">
            <Image src="/images/profile_picture.png" alt="Profile picture" height={200}
                    width={1}    // ダミーの幅（style で override）
                    style={{ width: "auto", height: "200px" }}
                    sizes="(max-width: 600px) 100vw, auto"/>
        </div>
        <div className="profile-description">
            <div className="profile-description-nametitle">
                <p>{Credential.nameJa} ({Credential.nameEn})</p>
                <p>{state.language === 'ja' ? Credential.titleJa : Credential.titleEn}</p>
            </div>
            <div className="profile-description-text">
                <p>{state.language === 'ja' ? Credential.line1Ja : Credential.line1En}</p>
                <p>{state.language === 'ja' ? Credential.line2Ja : Credential.line2En}</p>
            </div>
            <div className="profile">
                <Link href="https://www.linkedin.com/in/yoshiakikurihara/" >
                    <Image src="/images/LI-In-Bug.png" width={50} height={50} alt="LinkedIn" />
                </Link>
                <Link href="https://github.com/YoshiakiKurihara" >
                    <Image src="/images/github-mark-white.png" width={50} height={50} alt="GitHub" />
                </Link>
            </div>
        </div>
    </div>
    );
}; 