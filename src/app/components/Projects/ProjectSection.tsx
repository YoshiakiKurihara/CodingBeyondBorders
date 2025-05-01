import { css } from '../../../../styled-system/css';

interface Project {
  title: string;
  description: string;
  technologies: string;
}

const projects: Project[] = [
  {
    title: 'Coding Beyond Borders ...(this portfolio website)',
    description: '',
    technologies: 'Next.Js'
  },
  {
    title: '翻訳業務委託システム常時監視システム / interpreter Service Despatch site Real-time Monitoring Application',
    description: '',
    technologies: 'Python / Selenium'
  },
  {
    title: 'パイロットログブック デスクトップアプリケーション / Pilot Logbook Desktop Application',
    description: '',
    technologies: 'React/Tauri, Supabase'
  },
  {
    title: 'バーチャルエアラインモバイルアプリケーション / Airline Mobile Application',
    description: '',
    technologies: 'React Native'
  }
];

export const ProjectSection = () => {
  return (
    <div className={css({ marginTop: 'spacing.12' })}>
      <h2 className={css({ 
        fontWeight: 'bold',
        fontSize: 'fontSizes.xl',
        color: 'text.primary',
        marginBottom: 'spacing.6'
      })}>
        Current Project Highlights
      </h2>
      <div className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)' },
        gap: 'spacing.6'
      })}>
        {projects.map((project, index) => (
          <div key={index} className={css({
            padding: 'spacing.4',
            borderRadius: 'md',
            backgroundColor: 'background',
            boxShadow: 'sm'
          })}>
            <h3 className={css({
              fontWeight: 'semibold',
              fontSize: 'fontSizes.lg',
              color: 'text.primary',
              marginBottom: 'spacing.2'
            })}>
              {project.title}
            </h3>
            <p className={css({
              fontSize: 'fontSizes.xs',
              fontWeight: 'bold',
              color: 'text.secondary'
            })}>
              {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 