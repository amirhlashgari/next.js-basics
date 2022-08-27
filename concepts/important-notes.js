/*
    1. for rendering something like event-list or all-events component when we like to have data instantly when user opens page and we want 
        the data to be inside page source there is NOT any reason to load this on the client-side. so we go to server side rendering.
        but which one do we use and with what approach?
        we dont need SSR in such cases butt we will need getStaticProps and SSG
    
    2. for event detail page as above client side is not a good choice. and again its better use getStaticProps and SSG. because its not
        where the user needs specific data which changes all the time (last sentence is the use case of SSR).

    3. for using dynamic routes we should use getStaticPaths

    4. in SSG if our data would be updated we should re build and re deploy it to have them updated. one possible solution is to use
        getStaticProps and revalidate object key.

    5. single page application will render whole project on the client side, server side rendering would return for example html in request

    6. fallback:true will in getStaticPaths will say to component that there will be more ids that havent fetched yet and shows loading until happen.
        fallback: "blocking" will wait to load entire content and then will show page, it takes more to render but doesnt show loading component

    7. for filtering cases like [...slug].js because its path will vary in every model of serach getStaticProps is not a good option.
        pre-generating all possible situations of a filter would take a lot of pages to being complete. for this case getServerSideProps is better.
        see related server-side-rendering example in concepts

    8. filter pages or search pages would be also a good choice fo client side rendering. because we wont use them for SEO.

    9. for adding meta content to our page in head html element in Nextjs for SEO and user experience you should use "Head" component of Nextjs
        better to use different Head component for each page. but because of IF checks its better to have a const wich will contain head data 
        and have it in every IF check.
        check viewport meta tag thats for responsive sites and other neccesary ones
        Head component would be overwritten if there is one inside the rendering component. so its better to have typic Heads inside app.js file
        and then if any data required to change do it on the component

    10. check Image documentation for nextjs(super important)

    11. to send a request to the backend you should create api folder inside pages directory

*/