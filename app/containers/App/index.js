/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage/Loadable';
import ProjectsPage from 'pages/ProjectsPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import router from 'react-named-routes';

import GlobalStyle from '../../global-styles';

router.registerRoutes('', {
  home: { path: '/', component: HomePage, exact: true },
  projects: { path: '/projects', component: ProjectsPage },
});

export default function App() {
  return (
    <div className="app">
      <Helmet titleTemplate="%s - YOUR_PROJECT" defaultTitle="YOUR_PROJECT" />

      <Navbar />

      <Switch>
        <Route {...router.getRoute('home')} />
        <Route {...router.getRoute('projects')} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
