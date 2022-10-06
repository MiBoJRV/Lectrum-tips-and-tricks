import {
    Hero, Nav, Settings, TipList,
} from '../components';


export const AllTopicsPage = () => {
    return (
        <>
            <Settings />
            <section className = { 'layout' }>
                <Hero />
                <Nav />
                <TipList />
            </section>
        </>
    );
};
