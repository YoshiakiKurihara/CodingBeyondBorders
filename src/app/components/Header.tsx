'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Image from 'next/image'
import { css } from   '../../../styled-system/css';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageText } from './messages/Messages';

type SubMenuItem = {
    label: string;
    path: string;
};

type MenuItemType = {
    label: string;
    children?: SubMenuItem[];
};

const menuItems: MenuItemType[] = [
    { label: 'Home', children: [{ label: 'Home', path: '/' }] },
    { label: 'About', children: [{ label: 'About', path: '/About' }] },
    { label: 'Experience', children: [{ label: 'Python', path: '/Experience/Python' },
                                    { label: 'Next.js', path: '/Experience/NextJs' },
                                    { label: 'React Native', path: '/Experience/ReactNative' },
                                    { label: 'React/Tauri Desktop App', path: '/Experience/ReactTauri' },
                                    { label: 'MS.NET', path: '/Experience/dotNet' }]},
    { label: 'Portfolio', children: [
        { label: 'Real-time Web Page Monitoring App@Python', path: '/Portfolio/Python' },
        { label: 'This Portfolio Web App@Next.js', path: '/Portfolio/NextJs' },
        { label: 'Airline Mobile App@React Native', path: '/Portfolio/ReactNative' },
        { label: 'Pilot Logbook Desktop App@React/Tauri', path: '/Portfolio/ReactTauri' },
        { label: 'MS.NET', path: '/Portfolio/dotNet' }] },
    { label: 'Discussion Minutes', children: [
        { label: 'Regarding Next.js with Mr.GPT', path: '/Minutes/NextJs' },
        { label: 'Regarding Python with Mr.GPT', path: '/Minutes/Python' },
        { label: 'Regarding React/Tauri Desktop App with Mr.GPT', path: '/Minutes/ReactTauri' },
        { label: 'Regarding React Native with Mr.GPT', path: '/Minutes/ReactNative' },
        { label: 'Regarding MS.NET with Mr.GPT', path: '/Minutes/dotNet' }] },
    { label: 'Contact', children: [{ label: 'Contact Form', path: '/Contact' }] }
];

const Header = () => {
    const { state, dispatch } = useLanguage();

    const toggleJpLanguage = () => {
        const nextLang = state.language === 'en' ? 'ja' : 'ja';
        dispatch({ type: 'SET_LANGUAGE', payload: nextLang });
    };

    const toggleEnLanguage = () => {
        const nextLang = state.language === 'ja' ? 'en' : 'en';
        dispatch({ type: 'SET_LANGUAGE', payload: nextLang });
    };

    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElSubMenu, setAnchorElSubMenu] = useState<null | HTMLElement>(null);
    const [subMenuItems, setSubMenuItems] = useState<SubMenuItem[]>([]);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setAnchorElSubMenu(null);
    };

    const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>, children?: SubMenuItem[]) => {
        if (children) {
            setSubMenuItems(children);
            setAnchorElSubMenu(event.currentTarget);
        }
    }; 
    
    const handleCloseSubMenu = () => {
        setAnchorElSubMenu(null);
    };

    const handleSubMenuClick = (path: string) => {
        router.push(path);
        handleCloseSubMenu();
    };


    return (
        <>
            <div className={css({display: 'flex', flexDirection: 'row', bg: 'slate.800', color: 'white', p: 3, alignItems: 'center', flexWrap: 'wrap', })}>
                <div className={css({ flex: 1, minWidth: '250px' })}>
                    <p className={css({ fontSize: 'xl' })}>Coding Beyond Borders ...</p>
                    <p className={css({ fontSize: 'xs' })}>
                    {state.language === 'ja' ? MessageText.PORTFOLIO_SUBTITLE_JP : MessageText.PORTFOLIO_SUBTITLE_EN}
                    </p>
                </div>
            </div>
            <div className={css({bg: 'slate.800', color: 'white', fontSize: 'xs',})}>
                <AppBar position="static" component="div" sx={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', margin: '0', }}>
                    <Toolbar variant="dense" disableGutters sx={{ minHeight: '20px !important', height: '20px', padding: 0 }}>
                        {/* スマホ向けハンバーガー */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            >
                                {menuItems.map((item) => (
                                <MenuItem
                                    key={item.label}
                                    onClick={(e) => {
                                        handleCloseNavMenu();
                                        handleOpenSubMenu(e, item.children);
                                    }}
                                    sx={{ fontSize: '12px' }}>
                                    {item.label}
                                </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* PC向け横並びボタン */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, padding : '0' }}>
                            {menuItems.map((item) => (
                                <Button
                                key={item.label}
                                onClick={(e) => handleOpenSubMenu(e, item.children)}
                                sx={{ color: 'white', display: 'block', fontSize: '14px', marginLeft: '10px', }}
                                >
                                {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* サブメニュー（スマホ・PC共通） */}
                        <Menu
                            anchorEl={anchorElSubMenu}
                            open={Boolean(anchorElSubMenu)}
                            onClose={handleCloseSubMenu}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            >
                            {subMenuItems.map((subItem) => (
                                <MenuItem key={subItem.label} onClick={() => handleSubMenuClick(subItem.path)} sx={{ fontSize: '12px' }}>
                                {subItem.label}
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* 言語切り替え：国旗アイコンを右端に配置 */}
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', pr: 1 }}>
                            <span className={css({ fontSize: 'xs', mr: 2 })}> {state.language === 'ja' ? '[ JP 日本語 ]' : '[ GB English ]'}</span>
                            <Image
                            src="/images/Flag_of_Japan.svg"
                            width={25}
                            height={16}
                            alt="Japanese"
                            style={{ height: 'auto', marginLeft: '4px' }}
                            onClick={() => toggleJpLanguage()}
                            />
                            <Image
                            src="/images/Flag_Oz.png"
                            width={25}
                            height={16}
                            alt="Japanese"
                            style={{ height: 'auto', marginLeft: '4px' }}
                            onClick={() => toggleEnLanguage()}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Header;