import Image from 'next/image'

export default function RightSidebar() {
    return (
        <div>
            <div className="flex flex-col items-center gap-4">
                <Image src="/images/nodejsStackedLight.svg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Node.js" className="m-2" />
                <Image src="/images/ts-logo-512.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="TypeScript" className="m-2" />
                <Image src="/images/js.jpg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="JavaScript" className="m-2" />                   
                <Image src="/images/rust-logo-128x128-blk-v2.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Rust" className="m-2" />
                <Image src="/images/logo_light.svg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="React" className="m-2"/>
                <Image src="/images/icon.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Tauri" className="m-2" />
                <Image src="/images/Microsoft_.NET_logo.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Microsoft .NET" className="m-2" />
                <Image src="/images/supabase-logo-icon.svg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Supabase" className="m-2" />
                {/* <Image src="/images/LLGtubFh_400x400.jpg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Panda CSS" className="m-2" /> */}
            </div>
        </div>
    );
}