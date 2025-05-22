import React from 'react';
import { Outlet } from 'react-router';

const MasterLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default MasterLayout;