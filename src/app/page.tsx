// import Image from "next/image";
import { ProfileSection } from './components/Profile/ProfileSection';
import { ProjectSection } from './components/Projects/ProjectSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: { base: 'spacing.4', md: 'spacing.8' }
    })}>
      <ProfileSection />
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 'spacing.12',
        padding: { base: 'spacing.4', md: 'spacing.8' }
      })}>
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
    </div>
  );
}
