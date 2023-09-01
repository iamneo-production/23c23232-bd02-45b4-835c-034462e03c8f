import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ToolBox from '../ToolBox/ToolBox'
import AddQuestion from '../../Functional Components/AddQuestion/AddQuestion';
import ViewQuestion from '../../Functional Components/ViewQuestion/ViewQuestion';
import TextBox from '../../Functional Components/TextBox/TextBox';
import ImageBox from '../../Functional Components/ImageBox/ImageBox';

const Canvas = () => {

    const [droppedData, setDroppedData] = useState([]);

    const handleClose = (event) => {
        setDroppedData(oldArr => {
            return oldArr.filter((ele, idx) => (idx != event.target.value))
        })
    };

    function drop(event) {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        switch (data.obj) {
            case "add-q":
                setDroppedData((curr) =>
                    [...curr,
                    <AddQuestion />]
                );
                break;
            case "view-q":
                setDroppedData((curr) =>
                    [...curr,
                    <ViewQuestion />]
                );
                break;
            case "text-b":
                setDroppedData((curr) =>
                    [...curr,
                    <TextBox />]
                );
                break;
            case "img-b":
                setDroppedData((curr) =>
                    [...curr,
                    <ImageBox />]
                );
                break;
            default:
                alert("Invalid")
        }
        console.log(data.obj)
    }
    function onDragOver(event) {
        event.preventDefault();
    }

    return (
        <Row className='m-0' style={{ height: "100%" }}>
            <Col xs={3} style={{ borderRight: "1px solid black" }}>
                <ToolBox />
            </Col>
            <Col>
                <h3 className='mb-3' style={{ textAlign: "left" }}>Canvas</h3>
                <div className='w-100 p-3 overflow-auto' id='root' style={{ height: "90vh", backgroundColor: "whitesmoke" }} onDrop={drop}
                    onDragOver={(e) => { onDragOver(e) }}>
                    {droppedData.map((obj, idx) =>
                        <Card className='m-3 p-1'>
                            <button className="btn btn-close btn-lg" aria-label="Close" value={idx} onClick={(e) => handleClose(e)}></button>
                            <Card.Body className="card-body p-4" >{obj}</Card.Body>
                        </Card>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Canvas
