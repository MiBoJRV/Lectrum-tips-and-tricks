import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../lib/selectedTagContext';
import { useTags } from '../../hooks';
import { fetchify, getTagIcon } from '../../helpers';

export const TagsAside = () => {
    const [, setSelectedTagId] = useContext(Context);
    const {
        data: tags,
        isFetched,
    } = useTags();

    const tagsJSX = tags?.map(({
        id,
        name,
    }) => {
        const TagIcon = getTagIcon(name);


        return (
            <Link to = { '/topic-by-tag' } key = { id }>
                <span
                    className = { 'tag' }
                    key = { id }
                    data-active = { false }
                    onClick = { () => setSelectedTagId(id) }>
                    <TagIcon />
                    { name }
                </span>
            </Link>
        );
    });

    return <aside className = { 'tags-aside' }>
        <h1>Tэги</h1>
        <div>
            { fetchify(isFetched, tagsJSX) }
        </div>
    </aside>;
};
