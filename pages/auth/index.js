import React from 'react';
import Router from 'next/router';

const authIndexPage = () => (
    <div>
        <h1>The auth index page</h1>
        <button onClick={() => Router.push('/')}>Main Page</button>
    </div>
);

export default authIndexPage;