'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from "../messages/Messages";
import "../Profile/ProfileSection.css";

export const ProjectSection = () => {
  const { state, dispatch } = useLanguage();
  return (
    <div className="current-project">
        <div className="current-project-highlight-title">
            Current Project Highlights
        </div>
        <div>
            <ol className="current-project-tech-list">
              {projects.map((project, index) => (
                <li key={index} className="current-project-title">
                    {state.language === 'ja' ? project.titleJa : project.titleEn}
                    <ul>
                        <li key={index} className="current-project-techapplied">
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