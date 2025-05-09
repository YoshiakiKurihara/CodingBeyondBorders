// import Image from "next/image";
import { ProfileSection } from './components/Profile/ProfileSection';
import { ProjectSection } from './components/Projects/ProjectSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-[1200px] mx-auto p-4 md:p-8">
      <ProfileSection />
      <div className="flex flex-col w-full mt-12 p-4 md:p-8">
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
    </div>
  );
}
