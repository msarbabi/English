import React, { useState } from "react";
import Questions from "./questions";
import { Button } from "reactstrap";

const AEF = (props) => {
    const [showLesson, setShowLesson] = useState();

    const goBack = () => {
        props.history.push("/books");
    };
    const data = require(`./../data/aef-${props.match.params.id}`);
    const bookNumber = data.title.split(" ")[3];
    return (
        <div className='body'>
            <h1>{data.title}</h1>
            <div className='lesson-list'>
                {data.questions.ichecker.map((lesson) => (
                    <div
                        className={
                            showLesson === lesson.lesson
                                ? "lesson-link lesson-link-active"
                                : "lesson-link"
                        }
                        onClick={() => setShowLesson(lesson.lesson)}
                        key={lesson.lesson}
                    >
                        <h4>lesson {lesson.lesson}</h4>
                        {showLesson === lesson.lesson ? (
                            <Questions
                                lessonNum={lesson.lessonNum}
                                bookNumber={bookNumber}
                            />
                        ) : null}
                    </div>
                ))}
            </div>
            <Button
                color='success'
                size='sm'
                style={{ margin: "5px 45%" }}
                onClick={goBack}
            >
                Back
            </Button>
        </div>
    );
};

export default AEF;
