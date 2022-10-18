// Core

// Components

import {
    Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { AllTopicsPage, TipByIdPage, TopicByTagPage } from './pages';
import { Settings } from './components';

export const App = () => {
    return (
        <>
            <Settings />

            <Routes>
                <Route path = '/all-topics' element = { <Outlet /> }>
                    <Route path = '/' element = { <AllTopicsPage /> } />
                    <Route path = ':id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/topic-by-tag' element = { <Outlet /> }>
                    <Route path = '/' element = { <TopicByTagPage /> } />
                    <Route path = ':id' element = { <TipByIdPage /> } />
                </Route>

                <Route
                    path = '*'
                    element = { <Navigate to = 'all-topics' replace /> } />
            </Routes>
        </>

    );
};
