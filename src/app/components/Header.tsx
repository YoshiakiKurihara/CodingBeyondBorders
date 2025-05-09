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
import { useLanguage } from '../contexts/LanguageContext';
import { MessageText, menuItems, SubMenuItem } from './messages/Messages';

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
            <div className="flex flex-row bg-slate-800 text-white p-3 items-center flex-wrap">
                <div className="flex-1 min-w-[250px]">
                    <p className="text-xl">Coding Beyond Borders ...</p>
                    <p className="text-xs">
                    {state.language === 'ja' ? MessageText.PORTFOLIO_SUBTITLE_JP : MessageText.PORTFOLIO_SUBTITLE_EN}
                    </p>
                </div>
            </div>
            <div className="bg-slate-800 text-white text-xs">
                <AppBar position="static" component="div" sx={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', margin: '0', }}>
                    <Toolbar variant="dense" disableGutters sx={{ minHeight: '20px !important', height: '20px', padding: 0 }}>
                        {/* スマホ向けハンバーガー */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleOpenNavMenu}
                                sx={{fontSize: '10px'}}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                sx={{fontSize: '10px'}}
                            >
                                {menuItems.map((item) => (
                                <MenuItem
                                    key={state.language === 'ja' ? item.labelJp : item.labelEn}
                                    onClick={(e) => {
                                        handleCloseNavMenu();
                                        handleOpenSubMenu(e, item.children);
                                    }}
                                    sx={{ fontSize: '10px' }}>
                                    {item.labelJp}
                                </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* PC向け横並びボタン */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontSize: 'md', padding : '0' }}>
                            {menuItems.map((item) => (
                                <Button
                                key={state.language === 'ja' ? item.labelJp : item.labelEn}
                                onClick={(e) => handleOpenSubMenu(e, item.children)}
                                sx={{ color: 'white', display: 'block', fontSize: '10px', marginLeft: '10px', }}
                                >
                                {state.language === 'ja' ? item.labelJp : item.labelEn}
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
                                <MenuItem key={state.language === 'ja' ? subItem.labelJp : subItem.labelEn} onClick={() => handleSubMenuClick(subItem.path)} sx={{ fontSize: '10px' }}>
                                {state.language === 'ja' ? subItem.labelJp : subItem.labelEn}
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* 言語切り替え：国旗アイコンを右端に配置 */}
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', pr: 1 }}>
                            <span className="text-xs mr-2"> {state.language === 'ja' ? '[ JP 日本語 ]' : '[ GB English ]'}</span>
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