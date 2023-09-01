import { Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import * as Yup from 'yup';

const ViewQuestion = () => {

    const [type, setType] = useState("MCQ");
    const [question, setQuestion] = useState("This is the question?");

    const schema = Yup.object().shape({
        question: Yup.string()
            .label('Question')
            .required(),
        type: Yup.string()
            .required()
    })

    const handleSubmit = () => {

    }

    // const initialValues = {

    // }

    return (
        // <div className="card m-2" >
        <div style={{ textAlign: "left" }}>
            <h5 className="card-title mb-4">Question.</h5>

            <p className='mb-2'>{question}</p>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
            // initialValues={initialValues}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors, handleBlur, setFieldValue
                }) => (
                    <div>
                        <Form>
                            {/* Answer Field */}
                            {type === "TXT" && <Form.Group className="mb-3 mt-3" controlId="formAnswerfield" >
                                <InputGroup className="mb-3" hasValidation="true">
                                    <InputGroup.Text id="Answer">Answer</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Answer"
                                        aria-label="Answer"
                                        aria-describedby="Answer"
                                    />
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                    {errors.type}
                                </Form.Control.Feedback>
                            </Form.Group>}

                            {/* Option List */}
                            {type === "MCQ" && <Form.Group className="mb-3 mt-3" controlId="formAnswerOptions">
                                {/* <Form.Label>Question Type</Form.Label> */}
                                <InputGroup className="mb-3" hasValidation="true">
                                    <InputGroup.Radio aria-label="Radio button for following text input" name="groupOptions" />
                                    <InputGroup.Text id="basic-addon1">a. Answer No.1</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3" hasValidation="true">
                                    <InputGroup.Radio aria-label="Radio button for following text input" name="groupOptions" />
                                    <InputGroup.Text id="basic-addon2">b. Answer No.2</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3" hasValidation="true">
                                    <InputGroup.Radio aria-label="Radio button for following text input" name="groupOptions" />
                                    <InputGroup.Text id="basic-addon3">c. Answer No.3</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3" hasValidation="true">
                                    <InputGroup.Radio aria-label="Radio button for following text input" name="groupOptions" />
                                    <InputGroup.Text id="basic-addon4">d. Answer No.4</InputGroup.Text>
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                    {errors.type}
                                </Form.Control.Feedback>
                            </Form.Group>}
                            <Button variant="primary" type="submit" className="mt-3 float-end" style={{ width: "100px" }}>
                                NEXT
                            </Button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
        // </div >
    )
}

export default ViewQuestion
