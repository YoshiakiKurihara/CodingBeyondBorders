import { css } from '../../../../styled-system/css';

interface Experience {
  period: string;
  company: string;
  description?: string;
  details?: string[];
}

const experiences: Experience[] = [
  {
    period: '2024〜',
    company: 'フリーランス',
    description: 'オーストラリア メルボルンでフリーランス活動中'
  },
  {
    period: '2011',
    company: '某人財派遣会社',
    description: '某大学様 購買管理システム : VB6 → VB.NET移行'
  },
  {
    period: '2001-2009',
    company: '某SIer会社',
    description: '正社員勤務',
    details: [
      '某国鉄道会社様 新幹線運行管理システムの設計・開発(VC#、.NET WinForm)',
      '某鉄道会社様 運行管理システム構築(VC#、.NET WinForm、XML/Web Service)',
      '某鉄道会社様 運行管理システム構築(VB.NET、.NET WinForm、Oracle)',
      '某自動車会社様 システムコンサルティング(Microsoft.NET技術導入支援)',
      '某百貨店社様 お中元システム構築(Java、Oracle)',
      '社内にAgile開発を導入するために、レグレッションテストを標準化の為の自動化ツールの開発',
      '社内開発方式標準化の為のMS ASP.NET / WinFormsアプリケーションフレームワークライブラリ/標準開発方式の開発'
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <div className={css({ marginTop: 'spacing.6' })}>
      <h2 className={css({
        fontWeight: 'bold',
        fontSize: 'fontSizes.xl',
        color: 'text.primary',
        marginBottom: 'spacing.4'
      })}>
        職務経歴
      </h2>
      <ul className={css({
        listStyleType: 'disc',
        paddingLeft: 'spacing.5',
        color: 'text.secondary',
        '& > li': {
          marginBottom: 'spacing.4'
        }
      })}>
        {experiences.map((exp, index) => (
          <li key={index} className={css({
            '& > ul': {
              marginTop: 'spacing.2',
              paddingLeft: 'spacing.5'
            }
          })}>
            <span className={css({ fontWeight: 'semibold' })}>
              {exp.period} - {exp.company}
            </span>
            {exp.description && (
              <span className={css({ color: 'text.secondary' })}>
                : {exp.description}
              </span>
            )}
            {exp.details && (
              <ul className={css({
                listStyleType: 'disc',
                marginTop: 'spacing.2'
              })}>
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className={css({
                    color: 'text.secondary',
                    marginBottom: 'spacing.1'
                  })}>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}; 