// Components
import { useContext } from 'react';
import { Tip } from './Tip';

// Hook
import  { useTips } from '../../hooks';

// Helpers
import { fetchify } from '../../helpers';
import { Context } from '../../lib/selectedTagContext';

export const TipList = ({ tipViewMode }) => {
    const { data, isFetched } = useTips();
    const [selectedTagId] = useContext(Context);
    let tips = data;

    if (tipViewMode === 'topic-by-tag' && Array.isArray(data)) {
        tips = data.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = data.map((tip) => (
        <Tip key = { tip.id } { ...tip } />
    ));

    return (
        <section className = 'tip-list'>
            { fetchify(isFetched, tipsJSX) }
        </section>
    );
};
