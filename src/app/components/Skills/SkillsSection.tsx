'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { skillCategories } from "../messages/Messages";

export const SkillsSection = () => {
    const { state } = useLanguage();

    return (
    <div className="w-full max-w-[600px] mx-auto p-2.5 md:p-4">
            <div className="text-base md:text-lg font-bold mb-2">
            {state.language === 'ja' ? "技術スキル" : "Tech Skill"}
            </div>
            <div>
                <ul className="p-2 md:p-4 m-1.5 bg-[#d9eaff] rounded-lg">
                {skillCategories.map((skill, index) => (
                    <li key={index} className="text-base md:text-lg font-bold mb-4">
                        {state.language === 'ja' ? skill.titleJp : skill.titleEn}
                        <ul className="text-sm md:text-base font-normal ml-4">
                        {skill.items.map((item, i) => (
                                    <li key={i} className="mb-1">・{item}</li>
                        ))}
                        </ul>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}; 