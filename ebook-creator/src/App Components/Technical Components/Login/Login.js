import React from 'react'
import Button from 'react-bootstrap/Button';
import bg from '../assesst/bgimg.jpg'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const schema = Yup.object().shape({
        email: Yup.string().required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"),
        password: Yup.string().required('Password is required'),
    })
    const initialValues = {
        email: '',
        password: '',
    };
    const handleSubmit = async (values) => {
        console.log(values);
        await axios.post('http://localhost:8081/api/login', values).then(res => {
            localStorage.setItem('userrole', res.data.user.role);
            localStorage.setItem('email', res.data.user.email);
            navigate('/dashboard')
        })
    }
    return (
        <>
            <h2>Login Page</h2><br />

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
                    <Container className="vh-100 d-flex align-items-center justify-content-center">
                        <Row>
                            <Col xs={12} md={8} lg={6} className="mx-auto p-4 border rounded" style={{ minWidth: '350px', width: 'auto' }}>
                                <h2 className="mb-4 text-center">Login</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formGridemail">
                                        <Form.Label><b>Email</b></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter email"
                                            className="mb-3"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={touched.email && !!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formGridLastName">
                                        <Form.Label><b>Password</b></Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            className="mb-4"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            isValid={touched.password && !errors.password}
                                            isInvalid={touched.password && !!errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="mb-4">
                                        <Button type="submit" className="w-100">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>

                )}
            </Formik>
        </>
    )
}

export default Login