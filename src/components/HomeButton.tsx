import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {
    return (
        <Link to="/">
            <h4>Home</h4>
        </Link>
    )
}

export default HomeButton;