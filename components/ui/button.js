import Link from "next/link";

import classes from "./button.module.css";

function Button(props) {
    return (
        <Link href={props.link}>
            {/* if you want to set styles in Link you should use anchor tag inside it */}
            <a className={classes.btn}>{props.children}</a>
        </Link>
    );
}

export default Button;