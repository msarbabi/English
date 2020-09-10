import React, { useContext } from "react";
import ExamContext from "../Context/examContext";

const SetQuestion = ({ question, next }) => {
    const context = useContext(ExamContext);

    let score = context.score;

    const setScore = (e) => {
        const answer = e.split(". ")[1];
        if (answer === question.currectAnswer) {
            context.score = score + 1;
            next();
            return null;
        }
        next();
    };

    return (
        <div className='exam'>
            <p>{`${question.count}. ${question.question}`}</p>
            <div className='answers'>
                <ul className='question-ul'>
                    <li onClick={(e) => setScore(e.target.innerHTML)}>
                        a. {question.answer_a}
                    </li>
                    <li onClick={(e) => setScore(e.target.innerHTML)}>
                        b. {question.answer_b}
                    </li>
                    <li onClick={(e) => setScore(e.target.innerHTML)}>
                        c. {question.answer_c}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SetQuestion;
