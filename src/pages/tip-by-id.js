import { Nav } from '../components';
import { RecentTipAside, TagsAside, TipView } from '../features/tip-by-id';

export const TipByIdPage = () => {
    return (
        <section className = { 'layout' }>
            <Nav />
            <section className = { 'tip-view-layout' }>
                <TipView />
                <section className = { 'asides' }>
                    <RecentTipAside />
                    <TagsAside />
                </section>
            </section>
        </section>
    );
};
