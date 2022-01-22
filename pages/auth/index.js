import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The auth index page</h1>
        <button onClick={() => Router.push('/')}>Main Page</button>
        <User name="Amirhosein" age="28" />
    </div>
);

export default authIndexPage;