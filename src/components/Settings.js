// Core
import { useContext } from 'react';
import cx from 'classnames';

// Instruments
import { Context } from '../lib/settingsContext';

export const Settings = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useContext(Context);

    const handleClick = () => {
        setIsSettingsOpen(false);
    };
    const settingsClasses = cx('settings', {
        open:   isSettingsOpen,
        closed: !isSettingsOpen,
    });

    return (
        <section className = { settingsClasses }>
            <header>
                <h1>
                    Настройки
                </h1>
            </header>
            <footer>
                <button onClick = { handleClick }>
                    Закрыть
                </button>
            </footer>
        </section>
    );
};
