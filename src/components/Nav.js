// Core
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments

import { Context } from '../lib/settingsContext';

// Icons
import { icons } from '../theme/icons/nav';


export const Nav = () => {
    const [isSettingOpen, setSettingOpen] = useContext(Context);

    const handleClick = (event) => {
        event.preventDefault();

        setSettingOpen(true);
    };

    return (
        <nav className = 'nav'>
            <h1>T и Т</h1>
            <NavLink to = '/all-topics'>
                <icons.Home />
                Все темы
            </NavLink>
            <NavLink to = '/topic-by-tag'>
                <icons.Tag />
            По тэгам
            </NavLink>
            <NavLink to = '/publish'>
                <icons.Publish />
            Опубликовать
            </NavLink>
            <a
                className = { isSettingOpen ? 'active' : '' }
                onClick = { handleClick }>
                <icons.Settings />
            Настройки
            </a>
        </nav>
    );
};
