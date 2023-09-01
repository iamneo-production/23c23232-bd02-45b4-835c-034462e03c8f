import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

const ImageBox = () => {
    const [imageFile, setImageFile] = useState(null);
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    const schema = Yup.object().shape({
        height: Yup.number("Enter number").required('Required'),
        width: Yup.number("Enter number").required('Required'),
    })

    const initialValues = {
        height: '',
        width: '',
    };

    //image
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImageFile(base64);
    };

    //converting to base64
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleSubmit = (values) => {
        console.log(values);
        setWidth(values.width); // Update height state when input changes
        setHeight(values.height); // Update height state when input changes
    }

    return (
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
                <Container className="d-flex align-items-center justify-content-center">
                    {/* <Row>
                        <Col xs={12} md={8} lg={6} className="mx-auto p-4 border rounded" style={{ minWidth: '350px', width: 'auto' }}> */}
                    {imageFile ?
                        <img src={imageFile} style={{ width: { width } + 'px', height: height + 'px', backgroundSize: "cover", backgroundPosition: "center" }} alt='img' />
                        :
                        <Form onSubmit={handleSubmit}>
                            {height !== null && width !== null ?
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control type="file" onChange={(e) => handleImageUpload(e)} />
                                </Form.Group> : null}
                            <Form.Group controlId="formGridh">
                                <Form.Label><b>Height</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter height"
                                    className="mb-3"
                                    name="height"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.height}
                                    isValid={touched.height && !errors.height}
                                    isInvalid={touched.height && !!errors.height}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.height}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formGridLastName">
                                <Form.Label><b>Width</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter width"
                                    className="mb-3"
                                    name="width"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.width}
                                    isValid={touched.width && !errors.width}
                                    isInvalid={touched.width && !!errors.width}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.width}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="mb-4">
                                <Button type="submit" className="w-100">
                                    Add
                                </Button>
                            </div>
                        </Form>
                    }
                    {/* </Col>
                    </Row> */}
                </Container>
            )}
        </Formik >
    )
}

export default ImageBox