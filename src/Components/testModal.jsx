import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SetQuestion from "./setQuestion";
import ExamContext from "../Context/examContext";

const TestModal = () => {
    const [modal, setModal] = useState(false);

    const [num, setNum] = useState(2);

    const [showScore, setShowScore] = useState(false);

    const toggle = () => setModal(!modal);

    const context = useContext(ExamContext);

    const setQuestion = () => {
        context.question = context.questions[num - 1];
        if (context.question === undefined) {
            finish();
        }
        setNum(num + 1);
    };

    const finish = () => {
        setShowScore(true);
    };

    const restart = () => {
        context.question = context.questions[0];
        context.score = 0;
        setShowScore(false);
        setNum(2);
        toggle();
    };

    const closeBtn = (
        <button className='close' onClick={toggle}>
            &times;
        </button>
    );

    return (
        <div>
            <p className='lesson-describtion'>
                {`this quiz include 30 question from ${context.lesson}A ${context.lesson}B ${context.lesson}C. If you want to
                start click START button !`}
            </p>
            <Button
                outline
                size='sm'
                color='success'
                onClick={toggle}
                style={{ margin: "10px 0 0" }}
            >
                START
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={closeBtn}>
                    Lesson {context.lesson}
                </ModalHeader>
                <ModalBody>
                    {showScore === true ? (
                        <div>
                            Your Score: <span>{`${context.score} / 30`}</span>
                        </div>
                    ) : (
                        <SetQuestion
                            question={context.question}
                            next={setQuestion}
                        />
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color='secondary' onClick={toggle}>
                        Cancel
                    </Button>

                    <Button color='warning' onClick={restart}>
                        Restart
                    </Button>

                    {num <= 30 ? (
                        <Button color='success' onClick={setQuestion}>
                            next
                        </Button>
                    ) : null}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default TestModal;
