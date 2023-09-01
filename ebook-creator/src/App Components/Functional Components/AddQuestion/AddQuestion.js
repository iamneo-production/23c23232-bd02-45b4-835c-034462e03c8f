import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import * as Yup from 'yup';

const AddQuestion = () => {

  const [type, setType] = useState("MCQ");

  const schema = Yup.object().shape({
    question: Yup.string()
      .label('Question')
      .required(),
    type: Yup.string()
      .required()
  })

  const handleSubmit = () => {

  }

  const initialValues = {
    question: "",
    type: ""
  }

  const onChangeType = (event) => {
    setType(event.target.value)
  }

  return (
    // <div className="card m-2" >
    <div style={{ textAlign: "left" }}>
      <h5 className="card-title mb-4">Question.</h5>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors, handleBlur, setFieldValue
        }) => (
          <div>
            <Form noValidate onSubmit={handleSubmit}>

              {/* Question type selection */}
              <Form.Group className="mb-3" controlId="formQuestionType">
                {/* <Form.Label>Question Type</Form.Label> */}
                <Form.Select
                  placeholder="Question Type"
                  name="type"
                  onChange={onChangeType}>
                  value={type}
                  <option value="MCQ">MCQ</option>
                  <option value="TXT">TXT</option>
                </Form.Select >
                <Form.Control.Feedback type="invalid">
                  {errors.type}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Question */}
              <Form.Group controlId="question">
                {/* <Form.Label><b>Question</b></Form.Label> */}
                <Form.Control as="textarea" rows={3}
                  placeholder="Enter you question here."
                  className='mb-3'
                  name="question"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.question}
                  isValid={touched.question && !errors.question}
                  isInvalid={touched.question && !!errors.question} />
                <Form.Control.Feedback type="invalid">
                  {errors.question}
                </Form.Control.Feedback>
              </Form.Group>

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
                  <InputGroup.Text id="basic-addon1">a.</InputGroup.Text>
                  <Form.Control
                    placeholder="Option 1"
                    aria-label="Option-1"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3" hasValidation="true">
                  <InputGroup.Text id="basic-addon2">b.</InputGroup.Text>
                  <Form.Control
                    placeholder="Option 2"
                    aria-label="Option-2"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
                <InputGroup className="mb-3" hasValidation="true">
                  <InputGroup.Text id="basic-addon3">c.</InputGroup.Text>
                  <Form.Control
                    placeholder="Option 3"
                    aria-label="Option-3"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
                <InputGroup className="mb-3" hasValidation="true">
                  <InputGroup.Text id="basic-addon4">d.</InputGroup.Text>
                  <Form.Control
                    placeholder="Option 4"
                    aria-label="Option-4"
                    aria-describedby="basic-addon4"
                  />
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  {errors.type}
                </Form.Control.Feedback>
              </Form.Group>}
              <Button variant="primary" type="submit" className="mt-4 float-end" style={{ width: "100px" }}>
                ADD
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
    // </div>
  );
};

export default AddQuestion;
