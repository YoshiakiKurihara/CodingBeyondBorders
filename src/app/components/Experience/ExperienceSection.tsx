'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { experiences } from "../messages/Messages";

export const ExperienceSection = () => {
  const { state } = useLanguage();

  return (
    <div className="w-full max-w-[600px] mx-auto p-2.5 md:p-4">
      <div className="text-base md:text-lg font-bold mb-2">
        {state.language === 'ja' ? "職務経歴" : "Work Experience"}
      </div>
      <div>
        <ul className="p-2 md:p-4 m-1.5 bg-[#d9eaff] rounded-lg">
          {experiences.map((experience, index) => (
            <li key={index} className="text-base md:text-lg font-bold mb-4">
              <p className="text-primary-600">
                {experience.period}:
              </p>
              <p className="mb-1">
                {state.language === 'ja' ? experience.companyJa : experience.companyEn}
              </p>
              <p className="mb-2 text-sm md:text-base">
                {state.language === 'ja' ? experience.descriptionJa : experience.descriptionEn}
              </p>
              <ul className="text-sm md:text-base font-normal ml-4">
                {(state?.language === 'ja'
                  ? experience.detailsJa || []
                  : experience.detailsEn || []
                ).map((detail, i) => (
                  <li key={i} className="mb-1">・{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};