'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from "../messages/Messages";

export const ProjectSection = () => {
  const { state } = useLanguage();
  return (
    <div className="w-full max-w-[600px] mx-auto p-2.5 md:p-4">
        <div className="text-base md:text-lg font-bold mb-2">
            Current Project Highlights
        </div>
        <div>
            <ol className="p-2 md:p-4 m-1.5 bg-[#d9eaff] rounded-lg">
              {projects.map((project, index) => (
                <li key={index} className="text-base md:text-lg font-bold mb-2">
                    {state.language === 'ja' ? project.titleJa : project.titleEn}
                    <ul className="ml-4">
                        <li key={index} className="text-sm md:text-base font-normal">
                          ({project.technologies})
                        </li>
                    </ul>
                </li>
              ))}
            </ol>
        </div>
    </div>
  );
}; 