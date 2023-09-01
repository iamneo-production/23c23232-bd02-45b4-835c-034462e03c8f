import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../assesst/react-logo.png'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const schema = Yup.object().shape({
        firstName: Yup.string().required('First name is required').matches(/^[^\d]+$/, 'should not contain numbers'),
        lastName: Yup.string().required('Last name is required').matches(/^[^\d]+$/, 'should not contain numbers'),
        email: Yup.string().required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"),
        password: Yup.string().required('Password is required')
            .min(8, 'At least minimum 8 characters').matches(
                /^(?=.*[A-Z])/,
                'Password must contain at least one capital letter'
            ).matches(
                /^(?=.*[a-z])/,
                'Password must contain at least one lowercase letter'
            ).matches(/^(?=.*\d)/, 'Password must contain at least one digit')
            .matches(
                /^(?=.*[@$!%*?&])/,
                'Password must contain at least one special character'
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
        phone: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number not valid'),
        gender: Yup.string().required('gender is required'),
        terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
        role: Yup.string().required("Required")
    })
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: '',
        phone: '',
        terms: false,
        role: ''
    };

    const handleSubmit = async (values) => {
        await axios.post('http://localhost:8081/api/registration', values).then(res => {
            console.log(res.data);
        })
    }
    return (
        <Row className="mb-3" style={{ alignItems: 'center' }}>
            <Col size='sm' xs={8} md={4} style={{ marginLeft: '3rem', marginTop: '3rem' }}>
                <h2> Join with us</h2>
                <br></br>
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
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label><b>First name</b></Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name"
                                        className='mb-3'
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        isValid={touched.firstName && !errors.firstName}
                                        isInvalid={touched.firstName && !!errors.firstName} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label><b>Last name</b></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last name"
                                        className='mb-3'
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        isValid={touched.lastName && !errors.lastName}
                                        isInvalid={touched.lastName && !!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label><b>Email</b></Form.Label>
                                        <Form.Control type="email"
                                            placeholder="Enter email"
                                            className='mb-3'
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={touched.email && !!errors.email}
                                            value={values.email} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPhone">
                                        <Form.Label><b>Phone</b></Form.Label>
                                        <Form.Control type="text"
                                            placeholder="Enter Phone"
                                            className='mb-3'
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.phone && !errors.phone}
                                            isInvalid={touched.phone && !!errors.phone}
                                            value={values.phone} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Label><b>Role</b></Form.Label>
                                    <Form.Group controlId="formGridRole">
                                        <Form.Select aria-label="Default select example"
                                            name="role"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.role}
                                            isValid={touched.role && !errors.role}
                                            isInvalid={touched.role && !!errors.role}>
                                            <option>Select role</option>
                                            <option value="Author">Author</option>
                                            <option value="Publisher">Publisher</option>
                                            <option value="Reader">Reader</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.role}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Label><b>Gender</b></Form.Label>
                                    <Form.Group controlId="formGridGender">
                                        <Form.Check
                                            inline
                                            label="Male"
                                            value="male"
                                            name='gender'
                                            type='radio'
                                            id={`inline-radio-1`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // value={values.gender}
                                            isValid={touched.gender && !errors.gender}
                                            isInvalid={touched.gender && !!errors.gender}
                                        />
                                        <Form.Check
                                            inline
                                            name='gender'
                                            value="female"
                                            label="Female"
                                            type='radio'
                                            id={`inline-radio-2`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // value={values.gender}
                                            isValid={touched.gender && !errors.gender}
                                            isInvalid={touched.gender && !!errors.gender}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.gender}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    < br />
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label><b>Password</b></Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password"
                                            className='mb-3'
                                            name='password' onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.password && !errors.password}
                                            isInvalid={touched.password && !!errors.password}
                                            value={values.password} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                                        <Form.Label><b>Confirm Password</b></Form.Label>
                                        <Form.Control type="password" placeholder="Enter Confirm Password" className='mb-3'
                                            name='confirmPassword' onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.confirmPassword && !errors.confirmPassword}
                                            isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                                            value={values.confirmPassword} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.confirmPassword}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Check
                                            // type="checkbox"
                                            id="autoSizingCheck2"
                                            label="I’d like to receive marketing promotions special offers updates."
                                            className='mb-3'
                                            required
                                            name="terms"
                                            onChange={handleChange}
                                            isInvalid={!!errors.terms}
                                            feedback={errors.terms}
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                </Form.Group>
                                <div className="d-grid gap-2 mb-3">
                                    <Button type="submit">Submit</Button>
                                </div>
                            </Form>
                            Already have an account ? <Button variant="link" onClick={() => { navigate('/login') }}>Login</Button>
                        </div>
                    )}
                </Formik>
            </Col>
            <Col xs={12} md={6} style={{ textAlign: 'center', alignContent: 'center' }}>
                <img src={logo} style={{ marginTop: '3rem', width: '200px' }} alt='logo' />
            </Col>
        </Row >
    )
}

export default Registration