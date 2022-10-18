// Helpers
import { Link } from 'react-router-dom';
import { getTagIcon } from '../../helpers';

export const Tip = (props) => {
    const {
        title, created, author, preview, tag, id,
    } = props;

    const TagIcon = getTagIcon(tag.name);

    return (
        <article>
            <header>
                <TagIcon />
                <h1>{ title }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>🚀 { created }</span>
                        <span>👨🏼‍🚀 Автор: { author }</span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p> { preview } </p>
            </main>
            <footer>
                <Link to = { id }>📖 &nbsp;Читать полностью &rarr;</Link>
            </footer>
        </article>
    );
};
