import { Link } from 'react-router-dom';
import { useTips } from '../../hooks';
import {
    fetchify, formatDate, getTagIcon, sortByDate,
} from '../../helpers';

export const RecentTipAside = () => {
    const { data: tips, isFetched } = useTips();

    const recentTipsJSX = tips.sort(sortByDate).slice(0, 5).map(({
        id, tag, title, created,
    }) => {
        const TagIcon = getTagIcon(tag?.name);

        return (
            <Link key = { id } to = { `../${id}` }>
                <h3>{ title }</h3>
                <time>
                    <TagIcon>
                        { formatDate(created) }
                    </TagIcon>
                </time>
            </Link>
        );
    });

    return (
        <aside className = { 'recent-tips' }>
            <h1>Свежие типсы</h1>
            { fetchify(isFetched, recentTipsJSX) }
        </aside>
    );
};
