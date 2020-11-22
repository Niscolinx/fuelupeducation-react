import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import ROUTES, { RenderRoutes } from '../../studentRoutes';
import LoadingSimple from '../../UI/LoadingSimple/LoadingSimple';
import NavBar from './components/NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* ALL routes for students gooes here */}
      <Suspense fallback={LoadingSimple}>
        <RenderRoutes routes={ROUTES} />
      </Suspense>
      Footer maybe
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
