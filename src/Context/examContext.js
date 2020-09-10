import React from "react";

const ExamContext = React.createContext({
    score: 0,
    questions: [],
    currentQuestion: {},
});

export default ExamContext;
