// Core
import { useContext } from 'react';

// Hook
import { useTags } from '../hooks';

// Helpers
import { getTagIcon, fetchify } from '../helpers';
import { Context } from '../lib/selectedTagContext';

export const Tags = () => {
    const { data, isFetched } = useTags();

    const [selectedTagId, setSelectedTagId] = useContext(Context);

    const tagsJSX = data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };

        return (
            <span
                data-active = { selectedTagId === id }
                key = { id }
                className = { 'tag' }
                onClick = { handleClick }>
                <TagIcon />
                { name }
            </span>
        );
    });

    return (
        <div className = { 'tags' }>
            { fetchify(isFetched, tagsJSX) }
        </div>
    );
};
