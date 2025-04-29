// import Image from "next/image";
import { css } from   '../../../styled-system/css';

export default function about() {
  return (
      <div className={css({minHeight: '100vh', display: 'flex', flexDirection: 'column', bg: 'slate.100',})}>
        About
      </div>
  );
}
