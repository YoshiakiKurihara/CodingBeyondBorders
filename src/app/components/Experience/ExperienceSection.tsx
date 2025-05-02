'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { experiences } from "../messages/Messages";
import "../Profile/ProfileSection.css";


export const ExperienceSection = () => {
  const { state } = useLanguage();

  return (
    <div className="current-project">
      <div className="current-project-highlight-title">
      {state.language === 'ja' ? "職務経歴" : "Work Experience"}
      </div>
      <div>
        <ul className="current-project-tech-list">
          {experiences.map((experience, index) => (
            <li key={index} className="current-project-title">
              <div>
                {experience.period}:{state.language === 'ja' ? experience.companyJa : experience.companyEn}
                                    {state.language === 'ja' ? experience.descriptionJa : experience.descriptionEn}
              </div>
              {experience.detailsJa && (
                <ul className="current-project-techapplied">
                  {experience.detailsJa.map((detail, i) => (
                    <li key={i}>・{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};