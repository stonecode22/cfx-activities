import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    HomePage,
    NextNumberActivityPage,
    SequencesActivityPage,
    SentenceActivityPage,
    MyAccountPage,
    SignInPage,
    StatisticsPage
} from './pages/index.js';

const routes = [{
    path: '/',
    Component: HomePage,
}, {
    path: '/activity/next-number', 
    Component: NextNumberActivityPage,
}, {
    path: '/activity/sequences', 
    Component: SequencesActivityPage,
}, {
    path: '/activity/sentences', 
    Component: SentenceActivityPage,
}, {
    path: '/account', 
    Component: MyAccountPage,
}, {
    path: '/sign-in', 
    Component: SignInPage,
}, {
    path: '/statistics',
    Component: StatisticsPage,
}];

export const RouteCollection = ({ isLoading }) => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    return (<Route key={index} path={route.path} element={<route.Component />} />);   
                })}
            </Routes>
        </Router>
    );
}