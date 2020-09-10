import React, { useContext } from "react";
import ExamContext from "../Context/examContext";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Books = () => {
    const context = useContext(ExamContext);

    if (context.name === undefined) {
        context.name = localStorage.getItem("englishCourseWithMohamad");
    }

    const data = (
        <div className='books-list'>
            <h2>Hello again {context.name}</h2>
            <div>
                <h4>
                    American English File{" "}
                    <p style={{ display: "inline" }}>(Second Edition) </p> :
                </h4>
                <div className='image'>
                    <Link to='/aef/starter'>
                        <img
                            src={require("./../images/aef-s.jpg")}
                            alt='american english file starter'
                        />
                    </Link>
                    <Link to='/aef/1'>
                        <img
                            src={require("./../images/aef-1.jpg")}
                            alt='american english file 1'
                        />
                    </Link>
                    <Link to='/aef/2'>
                        <img
                            src={require("./../images/aef-2.jpg")}
                            alt='american english file 2'
                        />
                    </Link>
                    <Link to='/aef/3'>
                        <img
                            src={require("./../images/aef-3.jpg")}
                            alt='american english file 3'
                        />
                    </Link>
                    <Link to='/aef/4'>
                        <img
                            src={require("./../images/aef-4.jpg")}
                            alt='american english file 4'
                        />
                    </Link>
                    <Link to='/aef/5'>
                        <img
                            src={require("./../images/aef-5.jpg")}
                            alt='american english file 5'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className='container body'>
            {context.name ? data : <Redirect to='/' />}
        </div>
    );
};

export default Books;
