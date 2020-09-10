import React from "react";
import { BrowserRouter } from "react-router-dom";
import ExamContext from "../Context/examContext";
import MyApp from "./MyApp";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ExamContext.Provider
                    value={{
                        test: "hello there",
                        score: 0,
                        questions: [],
                        currentQuestion: {},
                    }}
                >
                    <MyApp />
                </ExamContext.Provider>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
