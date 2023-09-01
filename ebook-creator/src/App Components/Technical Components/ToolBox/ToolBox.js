import React from 'react'
import { Stack } from 'react-bootstrap'
import AddQuestion from '../../Functional Components/AddQuestion/AddQuestion';
import ViewQuestion from '../../Functional Components/ViewQuestion/ViewQuestion';
import TextBox from '../../Functional Components/TextBox/TextBox';
import ImageBox from '../../Functional Components/ImageBox/ImageBox';

const ToolBox = (props) => {

    const handleDragStart = (e, data) => {
        e.dataTransfer.setData('text/plain', JSON.stringify(data));
    }

    return (
        <div className='p-2'>
            <h5 className='mb-3' style={{ textAlign: "left" }}>Tool Box</h5>

            {/* <>
                <Button variant="primary" onClick={handleShow}>
                    Launch
                </Button>

                <Offcanvas show={show} onHide={handleClose} {...props} >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Tool Box</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body> */}
            <Stack className='overflow-auto' gap={2} style={{ height: "90vh" }}>
                <div draggable className="p-2 btn btn-light" onDragStart={(e) => handleDragStart(e, { obj: "add-q" })} >
                    <p>Add Question</p>
                    <AddQuestion />
                </div>
                <div draggable className="p-2 btn btn-light" onDragStart={(e) => handleDragStart(e, { obj: "view-q" })} >
                    <p>View Question</p>
                    <ViewQuestion />
                </div>
                <div draggable className="p-2 btn btn-light" onDragStart={(e) => handleDragStart(e, { obj: "text-b" })}>
                    <p>Text Field</p>
                    <TextBox />
                </div>
                <div draggable className="p-2 btn btn-light" onDragStart={(e) => handleDragStart(e, { obj: "img-b" })}>
                    <p>Image Box</p>
                    <ImageBox />
                </div>
            </Stack>
            {/* </Offcanvas.Body>
                </Offcanvas>
            </> */}
        </div>
    )
}

export default ToolBox
