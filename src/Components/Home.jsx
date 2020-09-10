import React from "react";
import { Link } from "react-router-dom";

const HomeApp = () => {
    return (
        <div className='container body'>
            <h1>Hello dear,</h1>
            <h4>
                I'm Mohamad and in this site you can learn English with American
                English File books.
            </h4>
            <h5>So, click on "Get Started" button for start lessons.</h5>
            <Link to='/sign-up' className='home-link'>
                Get started
            </Link>
        </div>
    );
};

export default HomeApp;
