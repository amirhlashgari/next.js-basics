import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>{props.appName}</h1>
        <button onClick={() => Router.push('/')}>Main Page</button>
        <User name="Amirhosein" age="28" />
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'NextJs App - Auth Page' });
        }, 1000);
    });
    return promise;
};

export default authIndexPage;