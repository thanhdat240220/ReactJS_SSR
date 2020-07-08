import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UserListPage';
import App from './App';

export default [
    {
        ...App,
        routers: [{
            path: '/',
            component: HomePage,
            exact: true
        }, {
            loadData,
            path: '/users',
            component: UserListPage
        }]
    }
];

