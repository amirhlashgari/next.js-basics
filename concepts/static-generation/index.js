import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";


function Home(props) {
    const { products } = props

    return (
        <Fragment>
            <ul>
                {products.map(product => {
                    <li key={product.id}>{product.title}</li>
                })}
            </ul>
        </Fragment>
    );

}


export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), 'concepts', 'getStaticProps', 'data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    if (!data) {
        return { redirect: { destination: "/" } } //redirects to / if nothing found 
    }

    if (data.products.length === 0) {
        return { notFound: true }; // if it doesnt find any data it returns 404 page by this setup
    }

    return {
        props: {
            products: data
        },
        revalidate: 50 //every 50 seconds re-generate the component for data changings. regenerates if 50 seconds has passed and client refresh data
        //,notFound: true    you could put it here but in this case always returns 404
    };



    //////////////////////////////////// if we want to access only one file according to passed id in [pid].js file(loading dynamic file):
    const { params } = context;
    const productId = params.pid;
    const product = data.products.find(product => product.id === productId);
    return {
        props: {
            loadedProduct: product
        }
    };
};

// due to pre rendering nextjs cant pre render dynamic routes with above function only and it needs below too
export async function getStaticPaths(context) {

    const filePath = path.join(process.cwd(), 'concepts', 'getStaticProps', 'data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const ids = data.products.map(product => product.id);
    const pathsWithParams = ids.map(id => ({ params: { pid: id } }));
    return {
        paths: pathsWithParams,
        fallback: false | true | 'blocking'
    };
    // return {
    //     paths: [
    //         { params: { pid: 'p1' } },
    //         { params: { pid: 'p2' } },
    //         { params: { pid: 'p3' } }
    //     ],
    //     fallback: false
    // }
}

export default Home;