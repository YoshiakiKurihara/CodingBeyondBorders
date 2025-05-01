import { css } from '../../../../styled-system/css';

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'フロントエンド',
    items: ['React', 'Next.js', 'React Native', 'React/Tauri Desktop']
  },
  {
    title: 'バックエンド',
    items: ['VC#', 'VB.NET', 'Java', 'Python(Selenium, Pandas)', 'TypeScript', 'JavaScript']
  },
  {
    title: 'データベース',
    items: ['MS SQL Server', 'Oracle', 'MySQL', 'Supabase', 'Node']
  }
];

export const SkillsSection = () => {
  return (
    <div className={css({ marginTop: 'spacing.6' })}>
      <h2 className={css({
        fontWeight: 'bold',
        fontSize: 'fontSizes.xl',
        color: 'text.primary',
        marginBottom: 'spacing.4'
      })}>
        技術スキル
      </h2>
      <ul className={css({
        listStyleType: 'disc',
        paddingLeft: 'spacing.5',
        color: 'text.secondary',
        '& > li': {
          marginBottom: 'spacing.4'
        }
      })}>
        {skillCategories.map((category, index) => (
          <li key={index}>
            <span className={css({
              fontWeight: 'semibold',
              color: 'text.primary'
            })}>
              {category.title}:
            </span>
            <ul className={css({
              listStyleType: 'disc',
              paddingLeft: 'spacing.5',
              marginTop: 'spacing.2'
            })}>
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className={css({
                  color: 'text.secondary',
                  marginBottom: 'spacing.1'
                })}>
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}; 