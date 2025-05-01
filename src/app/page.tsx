// import Image from "next/image";
import Image from 'next/image';
import { css } from   '../../styled-system/css';

export default function Home() {
  return (
    <>
    <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px', marginTop: '30px', })}>
      <div className={css({ display: 'flex', flexDirection: 'row', fontSize: 's', color: 'black.500' })}>
        <div>
          <Image src="/images/profile_picture.png" width={150} height={0} style={{ height: 'auto' }} alt="Profile picture" />
        </div>
        <div className={css({ textAlign: 'left', padding: '0px', marginTop: '30px', marginLeft: '20px', })}>
          <div className={css({ margin: '0', padding: '5px', fontSize: 'md', fontWeight: 'bold', alignItems: 'left',})}>
              栗原 義彰 (Yoshi Kurihara)
          </div>
          <div className={css({ margin: '0', padding: '5px', fontSize: 'md', fontWeight: 'bold', alignItems: 'left',})}>
            ソフトウェアエンジニア
          </div>
          <div className={css({ display: 'flex', flexDirection: 'column', padding: '5px', alignItems: 'left', })}>
              <p className="font-bold">アイデアをカタチに、国境を越えて。</p>
              <p className="text-gray.600">C#/.NET に強いフリーランス開発者、メルボルン拠点</p>
          </div>
        </div>
      </div>
    </div>
    <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'left', padding: '5px', marginTop: '30px', marginLeft: '100px',})}>
      <div>
        {/* <!-- プロジェクトセクション --> */}
        <div>
          <h2 className={css({fontWeight: 'bold',})}>Current Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Coding Beyond Borders ...(this portfolio website)</h3>
              <p className={css({fontSize: 'xs', fontWeight: 'bold', marginBottom: '10px'})}>Next.Js</p>
            </div>
            <div>
              <h3 className="font-semibold">翻訳業務委託システム常時監視システム / Interpretor Service Despatch site Real-time Monitoring Application</h3>
              <p className={css({fontSize: 'xs', fontWeight: 'bold', marginBottom: '10px' })}>Python / Selenium</p>
            </div>
            <div>
              <h3 className="font-semibold">パイロットログブック デスクトップアプリケーション / Pilot Logbook Destop Application</h3>
              <p className={css({fontSize: 'xs', fontWeight: 'bold', marginBottom: '10px' })}>React/Tauri, Supabase</p>
            </div>
            <div>
              <h3 className="font-semibold">バーチャルエアラインモバイルアプリケーション / Airline Mobile Application</h3>
              <p className={css({fontSize: 'xs', fontWeight: 'bold', marginBottom: '10px' })}>React Native</p>
            </div>
            {/* <!-- More projects... --> */}
          </div>
        </div>
        {/* <!-- 経歴 --> */}
        <div className={css({marginTop: '10px', })}>
          <h2 className={css({fontWeight: 'bold',})}>職務経歴</h2>
          <ul className="list-disc pl-5 text-gray.700 space-y-2">
            <li>現在、オーストラリア メルボルンでフリーランス活動中 (2024〜)</li>
            <li>某人財派遣会社様経由 某大学様 購買管理システム : VB6 → VB.NET移行(2011)</li>
            <li>某SIer会社正社員勤務:
              <ul>
                  <li>某国鉄道会社様 新幹線運行管理システムの設計・開発(VC#、.NET WinForm)</li>
                  <li>某鉄道会社様 運行管理システム構築(VC#、.NET WinForm、XML/Webservice)</li>
                  <li>某鉄道会社様 運行管理システム構築(VB.NET、.NET WinForm、Oracle)</li>
                  <li>某自動車会社様 システムコンサルティング(Microsoft.NET技術導入支援)</li>
                  <li>某百貨店社様 お中元システム構築(Java、Oracle)</li>
                  <li>社内にAgile開発を導入するために、レグレッションテストを標準化の為の自動化ツールの開発</li>
                  <li>社内開発方式標準化の為のMS ASP.NET / WinFormsアプリケーションフレームワークライブラリ/標準開発方式の開発</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!-- 資格 --> */}
        <div className={css({marginTop: '10px', })}>
          <h2 className={css({fontWeight: 'bold',})}>技術スキル</h2>
          <ul className="list-disc pl-5 text-gray.700 space-y-2">
          <li>React, Next.js, React Native, React/Tauri Desktop</li>
          <li>VC#, VB.NET, Java, Python(Selenium, Pandas), TypeScript, JavaScript</li>
          <li>データベース: MS SQL Server, Oracle, MySQL, Supabase, Node</li>
          </ul>
        </div>
        {/* <!-- 資格 --> */}
        <div className={css({marginTop: '10px', })}>
          <h2 className={css({fontWeight: 'bold',})}>職務経歴</h2>
          <ul className="list-disc pl-5 text-gray.700 space-y-2">
          <li>現在、オーストラリア メルボルンでフリーランス活動中 (2024〜)</li>
          <li>某人財派遣会社様経由 某大学様 購買管理システム : VB6 → VB.NET移行(2011)</li>
          <li>某SIer会社正社員勤務:運行管理システム開発(2001-2009)</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
