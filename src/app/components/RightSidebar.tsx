import Image from 'next/image'
import { css } from   '../../../styled-system/css';

const RightSidebar = () => {
    return (
        <div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', })}>
                <Image src="/images/nodejsStackedLight.svg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Node.js" className={css({ margin: '2', })} />
                <Image src="/images/ts-logo-512.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="TypeScript" className={css({ margin: '2', })} />
                <Image src="/images/js.jpg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="JavaScript" className={css({ margin: '2', })} />                   
                <Image src="/images/rust-logo-128x128-blk-v2.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Rust" className={css({ margin: '2', })} />
                <Image src="/images/logo_light.svg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="React" className={css({ margin: '2', })}/>
                <Image src="/images/icon.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Tauri" className={css({ margin: '2', })} />
                <Image src="/images/Microsoft_.NET_logo.png" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Microsoft .NET" className={css({ margin: '2', })} />
                <Image src="/images/supabase-logo-icon.svg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Supabase" className={css({ margin: '2', })} />
                <Image src="/images/LLGtubFh_400x400.jpg" width={50} height={0} style={{ width: 'auto', height: 'auto' }} alt="Panda CSS" className={css({ margin: '2', })} />
            </div>
        </div>
    );
}

export default RightSidebar;