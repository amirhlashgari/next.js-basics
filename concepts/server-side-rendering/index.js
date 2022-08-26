
function UserProfile(props) {
    return <h1>{props.username}</h1>
}

//this function has dynamic rendering inside itself. follow SSG instructions
export async function getServerSideProps(context) {
    const { params, req, res } = context;

    return {
        props: {
            username: "amirhosein"
        }
    };
}