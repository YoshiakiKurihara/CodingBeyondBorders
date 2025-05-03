export const MessageText = {
    TITLE_EXPERIENCE_PYTHON :  '私のPython 開発について',
    TITLE_EXPERIENCE_DOTNET :  '私の.NET 開発について',
    TITLE_EXPERIENCE_NEXTJS :  '私のNext.js 開発について',
    TITLE_EXPERIENCE_REACTNATIVE :  '私のReact Native開発について',
    TITLE_EXPERIENCE_REACTTAURI :  '私のReact/Tauri デスクトップ開発について',
    TITLE_PORTFOLIO_PYTHON :  '私のPython 開発について',
    TITLE_PORTFOLIO_DOTNET :  '私の.NET 開発について',
    TITLE_PORTFOLIO_NEXTJS :  '私のNext.js 開発について',
    TITLE_PORTFOLIO_REACTNATIVE :  '私のReact Native開発について',
    TITLE_PORTFOLIO_REACTTAURI :  '私のReact/Tauri デスクトップ開発について',
    TITLE_DISCUSSION_PYTHON :  '私のPython 開発について',
    TITLE_DISCUSSION_DOTNET :  '私の.NET 開発について',
    TITLE_DISCUSSION_NEXTJS :  '私のNext.js 開発について',
    TITLE_DISCUSSION_REACTNATIVE :  '私のReact Native開発について',
    TITLE_DISCUSSION_REACTTAURI :  '私のReact/Tauri デスクトップ開発について',
    PORTFOLIO_NAME_JP : '栗原 義彰',
    PORTFOLIO_NAME_EN : 'Yoshi Kurihara',
    PORTFOLIO_TITLE_JP : 'フルスタックエンジニア',
    PORTFOLIO_TITLE_EN : 'FULL STACK ENGINEER',
    PORTFOLIO_INTRO_JP : '2008年にオーストラリアへ移住し、現在はビクトリア州メルボルン在住です。日本では大手SIerにて、生産技術やシステム開発に従事していました。当時は主に.NETを扱っていましたが、現在は領域を広げ、PythonによるWebスクレイピング、React / Next.jsによるWebアプリ開発、React Nativeによるモバイルアプリ開発、Tauriを用いたデスクトップアプリ開発などに取り組んでいます。Web・モバイル・デスクトップ問わず、幅広い技術で開発のお手伝いが可能です。お仕事のご相談など、ぜひお気軽にご連絡ください！',
    PORTFOLIO_INTRO_EN : 'G\'day, I moved to Australia in 2008 and currently reside in Melbourne, Victoria. In Japan, I worked for a major systems integrator, focusing on production technology and system development. Back then, I primarily worked with .NET technologies. Since then, I’ve broadened my skill set to include web scraping with Python, web application development with React and Next.js, mobile app development with React Native, and desktop application development using Tauri. I can support a wide range of development needs across web, mobile, and desktop platforms. Please feel free to reach out if you have any inquiries or project ideas!',
    PORTFOLIO_SUBTITLE_JP : 'コーディングは国境を越え、あなたのアイデアやビジネスを実現します。',
    PORTFOLIO_SUBTITLE_EN : 'Bringing Your Ideas and Ambitions to Life — Anywhere in the World',
    LATEST_JP : '最新の5件',
    LATEST_EN : 'Latest 5 Updates',
    UPDATE_JP : '更新',
    UPDATE_EN : 'Update',
    ARTICLE_JP : '記事', 
    ARTICLE_EN : 'Article',
}

export type SubMenuItem = {
    labelJp: string;
    labelEn: string;
    path: string;
};

export type MenuItemType = {
    labelJp: string;
    labelEn: string;
    children?: SubMenuItem[];
};

export const menuItems: MenuItemType[] = [
    { labelJp: 'ホーム', labelEn: 'Home', children: [{ labelJp: 'ホーム', labelEn: 'Home', path: '/' }] },
    { labelJp: '経験', labelEn: 'Experience',   children: [{ labelJp: 'Python', labelEn: 'Python', path: '/Experience/Python' },
                                                        { labelJp: 'Next.js', labelEn: 'Next.js', path: '/Experience/NextJs' },
                                                        { labelJp: 'React Native', labelEn: 'React Native', path: '/Experience/ReactNative' },
                                                        { labelJp: 'React/Tauri デスクトップ', labelEn: 'React/Tauri Desktop App', path: '/Experience/ReactTauri' },
                                                        { labelJp: 'MS.NET', labelEn: 'MS.NET', path: '/Experience/dotNet' }]},
    { labelJp: 'ポートフォリオ', labelEn: 'Portfolio', children: [
        { labelJp: 'Webサイト常時監視アプリケーション@Python', labelEn: 'Real-time Web Page Monitoring App@Python', path: '/Portfolio/Python' },
//        { label: 'Real-time Web Page Monitoring App@Python', path: '/Portfolio/Python' },
        { labelJp: '本ポートフォリオWebサイト@Next.js', labelEn: 'This Portfolio Web App@Next.js', path: '/Portfolio/NextJs' },
        { labelJp: 'エアライン モバイルアプリ@React Native', labelEn: 'Airline Mobile App@React Native', path: '/Portfolio/ReactNative' },
        { labelJp: 'パイロットログブック デスクトップアプリ@React/Tauri', labelEn: 'Pilot Logbook Desktop App@React/Tauri', path: '/Portfolio/ReactTauri' },
        { labelJp: 'MS .NET', labelEn: 'MS.NET', path: '/Portfolio/dotNet' }] },
    { labelJp: 'Mr.GPTとの議論議事録', labelEn: 'Discussion Minutes', children: [
        { labelJp: 'Mr.GPTとNext.jsについて議論', labelEn: 'Regarding Next.js with Mr.GPT', path: '/Minutes/NextJs' },
        { labelJp: 'Mr.GPTとPythonについて議論', labelEn: 'Regarding Python with Mr.GPT', path: '/Minutes/Python' },
        { labelJp: 'Mr.GPTとReact/Tauri Desktopについて議論', labelEn: 'Regarding React/Tauri Desktop App with Mr.GPT', path: '/Minutes/ReactTauri' },
        { labelJp: 'Mr.GPTとReact Nativeについて議論', labelEn: 'Regarding React Native with Mr.GPT', path: '/Minutes/ReactNative' },
        { labelJp: 'Mr.GPTとMS.NETについて議論', labelEn: 'Regarding MS.NET with Mr.GPT', path: '/Minutes/dotNet' }] },
    { labelJp: 'お問い合わせ', labelEn: 'Contact', children: [{ labelJp: 'お問い合わせ', labelEn: 'Contact Form', path: '/Contact' }] }
];

export const Credential = {
    nameJa : "栗原 義彰",
    nameEn : "Yoshi Kurihara",
    titleJa : "フルスタック エンジニア",
    titleEn : "Fullstack Engineer",
    line1Ja : "国境を越えてあなたのアイデア、カタチにするお手伝いを。",
    line1En : "Helping bring your ideas to life — beyond borders.",
    line2Ja : "フリーランス ソフトウェア開発者、メルボルン拠点",
    line2En : "Freelance Software Engineer based in Melbourne, VIC",
}


export interface Project {
    titleJa: string;
    titleEn: string;
    description: string;
    technologies: string;
}

export const projects: Project[] = [
{
    titleJa: 'Coding Beyond Borders ... / 本サイトです',
    titleEn: 'Coding Beyond Borders ... / this portfolio website',
    description: '',
    technologies: 'Next.Js'
},
{
    titleJa: '翻訳業務委託システム常時監視システム',
    titleEn: 'Interpretor Service Despatch site Real-time Monitoring Application',
    description: '',
    technologies: 'Python / Selenium'
},
{
    titleJa: 'パイロットログブック デスクトップアプリケーション',
    titleEn: 'Pilot Logbook Desktop Application',
    description: '',
    technologies: 'React/Tauri, Supabase'
},
{
    titleJa: 'バーチャルエアラインモバイルアプリケーション',
    titleEn: 'Airline Mobile Application',
    description: '',
    technologies: 'React Native'
}
];

interface Experience {
    period: string;
    companyJa: string;
    companyEn?: string;
    descriptionJa?: string;
    descriptionEn?: string;
    detailsJa?: string[];
    detailsEn?: string[];
}

export const experiences: Experience[] = [
    {
        period: '2023〜',
        companyJa: 'フリーランス',
        companyEn: 'Freelance Fullstack Engineer',
        descriptionJa: 'オーストラリア メルボルンでフリーランス活動中',
        descriptionEn: 'Freelance developer based in Melbourne, Australia.',
    },
    {
        period: '2011〜2011',
        companyJa: '派遣社員',
        companyEn: 'Contract Software Engineer',
        descriptionJa: '某大学様 購買管理システム : VB6 → VB.NET移行',
        descriptionEn: "Migrated a university's procurement system from VB6 to VB.NET",
    },
    {
        period: '2001〜2009',
        companyJa: '某SIer会社',
        companyEn: 'Fulltime Software Engineer',
        descriptionJa: '正社員勤務',
        descriptionEn: 'Fulltime staff at SIer',
        detailsJa: [
        '某国鉄道会社様 新幹線運行管理システムの設計・開発(VC#、.NET WinForm)',
        '某鉄道会社様 運行管理システム構築(VC#、.NET WinForm、XML/Web Service)',
        '某鉄道会社様 運行管理システム構築(VB.NET、.NET WinForm、Oracle)',
        '某自動車会社様 システムコンサルティング(Microsoft.NET技術導入支援)',
        '某百貨店社様 お中元システム構築(Java、Oracle)',
        '社内にAgile開発を導入するために、レグレッションテストを標準化の為の自動化ツールの開発',
        'MS ASP.NET / WinFormsアプリケーションフレームワークライブラリの開発'
        ],
        detailsEn:[
            "Designed and developed a Shinkansen (bullet train) operation management system for a major national railway company (VC#, .NET WinForms)",
            "Developed an operation management system for a railway company using VC#, .NET WinForms, and XML/Web Services.",
            "Built an operation management system for a railway company using VB.NET, .NET WinForms, and Oracle.",
            "Provided system consulting for a major automotive company, supporting the adoption of Microsoft .NET technologies.",
            "Developed a seasonal gift order management system (Ochugen) for a major department store using Java and Oracle.",
            "Developed an automated tool to standardize regression testing in order to introduce Agile development practices within the company.",
            "Developed application framework libraries for MS ASP.NET and WinForms.",
        ],
    }
];

export interface SkillCategory {
    titleJp: string;
    titleEn: string;
    items: string[];
}

export const skillCategories: SkillCategory[] = [
{
    titleJp: 'フロントエンド',
    titleEn: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'React/Tauri Desktop']
},
{
    titleJp: 'バックエンド',
    titleEn: 'Backend',
    items: ['VC#', 'VB.NET', 'Java', 'Python(Selenium, Pandas)', 'TypeScript', 'JavaScript']
},
{
    titleJp: 'データベース',
    titleEn: 'DataBase',
    items: ['MS SQL Server', 'Oracle', 'MySQL', 'Supabase', 'Node']
}
];
