'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import { skillCategories } from "../messages/Messages";
import "../Profile/ProfileSection.css";

export const SkillsSection = () => {
    const { state } = useLanguage();

    return (
    <div className="current-project">
            <div className="current-project-highlight-title">
            {state.language === 'ja' ? "技術スキル" : "Tech Skill"}
            </div>
            <div className="current-project-item">
                <ul className="current-project-tech-list">
                {skillCategories.map((skill, index) => (
                    <li key={index} className="current-project-title">
                        {state.language === 'ja' ? skill.titleJp : skill.titleEn}
                        <ul className="current-project-techapplied">
                        {skill.items.map((item, i) => (
                                    <li key={i}>・{item}</li>
                        ))}
                        </ul>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}; 