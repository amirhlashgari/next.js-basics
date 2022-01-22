import React from 'react';
import Link from 'next/link';

const indexPage = () => (
    <div>
        <h1>The main page</h1>
        <p>Go To <Link href='/auth'>Auth</Link></p>
    </div>
);

export default indexPage;