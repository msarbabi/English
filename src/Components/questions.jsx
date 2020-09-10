import React, { useContext } from "react";
import ExamContext from "../Context/examContext";
import TestModal from "./testModal";

const Questions = ({ lessonNum, bookNumber }) => {
    const context = useContext(ExamContext);
    const lessonData = require(`./../data/AEF-${bookNumber}/${lessonNum}.json`);

    context.questions = lessonData.exam;
    context.lesson = lessonData.lesson;
    context.question = lessonData.exam[0];

    return <TestModal />;
};

export default Questions;
