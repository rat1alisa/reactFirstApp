import { func } from "prop-types";
import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import Button from "../common/Button/Button";
import Form from "../common/MyForm/MyForm";


function Home() {
    return(
        <div className="homePageBlock">
            <h2>Home page</h2>
            <Form />
        </div>
    )
}

export default Home;
