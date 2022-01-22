import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {

    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'NextJs App - Main Page' });
            }, 3000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>{this.props.appName}</h1>
                <p>Go to<Link href='/auth'>Auth</Link></p>
            </div>
        );
    }
}

export default IndexPage;