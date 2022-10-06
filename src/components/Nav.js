// Core
import { useContext } from 'react';

// Instruments

import { Context } from '../lib/settingsContext';

// Icons
import { icons } from '../theme/icons/nav';


export const Nav = () => {
    const [, setSettingOpen] = useContext(Context);

    const handleClick = (event) => {
        event.preventDefault();
        setSettingOpen(true);
    };

    return (
        <nav className = 'nav'>
            <h1>T и Т</h1>
            <a href = '#'>
                <icons.Home />
                Все темы
            </a>
            <a href = '#'>
                <icons.Tag />
            По тэгам
            </a>
            <a href = '#'>
                <icons.Publish />
            Опубликовать
            </a>
            <a href = '#' onClick = { handleClick }>
                <icons.Settings />
            Настройки
            </a>
        </nav>
    );
};
