import Image from 'next/image';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

export const ProfileSection = () => {
  return (
    <div className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 'spacing.2',
      marginTop: 'spacing.12'
    })}>
      <div className={css({
        display: 'flex',
        flexDirection: 'row',
        fontSize: 'fontSizes.sm',
        color: 'text.primary'
      })}>
        <div>
          <Image 
            src="/images/profile_picture.png" 
            width={150} 
            height={0} 
            style={{ height: 'auto' }} 
            alt="Profile picture" 
          />
        </div>
        <div className={css({
          textAlign: 'left',
          padding: '0',
          marginTop: 'spacing.12',
          marginLeft: 'spacing.8'
        })}>
          <div className={css({
            margin: '0',
            padding: 'spacing.2',
            fontSize: 'fontSizes.md',
            fontWeight: 'bold',
            alignItems: 'left'
          })}>
            栗原 義彰 (Yoshi Kurihara)
          </div>
          <div className={css({
            margin: '0',
            padding: 'spacing.2',
            fontSize: 'fontSizes.md',
            fontWeight: 'bold',
            alignItems: 'left'
          })}>
            ソフトウェアエンジニア
          </div>
          <div className={css({
            display: 'flex',
            flexDirection: 'column',
            padding: 'spacing.2',
            alignItems: 'left'
          })}>
            <p className={css({ fontWeight: 'bold' })}>アイデアをカタチに、国境を越えて。</p>
            <p className={css({ color: 'text.secondary' })}>C#/.NET に強いフリーランス開発者、メルボルン拠点</p>
          </div>
          <div className={css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'spacing.2'
          })}>
            <Link href="https://www.linkedin.com/in/yoshiakikurihara/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/LI-In-Bug.png" 
                width={30} 
                height={0} 
                style={{ width: 'auto', height: 'auto' }} 
                alt="LinkedIn" 
              />
            </Link>
            <Link href="https://github.com/YoshiakiKurihara" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/github-mark-white.png" 
                width={30} 
                height={0} 
                style={{ width: 'auto', height: 'auto' }} 
                alt="GitHub" 
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 