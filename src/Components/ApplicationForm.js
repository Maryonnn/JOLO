import NavBar from "./NavBar.js";
import { 
    Container, Card, 
    Form, Row, Col,
    Button, Navbar
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ApplicationForm() {
    const navigate = useNavigate();

    function navigateToOwner(){
        navigate("/owner-form");
    }

    return(
        <>
            <NavBar />
            <Container>
                <Container className="d-flex justify-content-center mt-5 mb-3">
                    <h2 className="title-text">BUILDING PERMIT APPLICATION</h2>
                </Container>
                <Card className="card-form">
                    <Card.Body className="p-5">
                        <Form>
                            <Row className="g-5">
                                <Col md>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="fw-bold title-text">REFERENCE NO.</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            size="lg"
                                            placeholder="Auto-Generated" 
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="fw-bold title-text">APPLICATION NO.</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            size="lg"
                                            placeholder="Auto-Generated" 
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="fw-bold title-text">AREA NO.</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            size="lg"
                                            placeholder="Enter area no." 
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="fw-bold title-text">TYPE OF APPLICATION</Form.Label><br />
                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="New"
                                            name="group1"
                                            className="fs-5"
                                        />
                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="Renew"
                                            name="group1"
                                            className="fs-5"
                                        />
                                    </Form.Group>

                                    <Form.Label className="fw-bold title-text">PERMIT ALSO APPLIES TO:</Form.Label><br />
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Check
                                                        label="Local Clearance"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Fire Safety Evaluation Clearance"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Sanitary Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Electrical Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Mechanical Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Check
                                                        label="Architectural Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Civil/Structural Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Plumbing Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Electronics Permit"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    <p className="text-permit">
                                        Permit Also Applies To: cannot be blank.
                                    </p>
                                </Col>
                            </Row>
                        </Form>
                        <Container className="d-flex justify-content-center mt-5">
                            <Button variant="outline-primary" className="w-25 fw-bold p-3 me-3">Save as Draft</Button>
                            <Button 
                                variant="success" 
                                className="w-25 fw-bold p-3"
                                onClick={navigateToOwner}
                            >
                                Next
                            </Button>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
            <Container fluid className="mt-5">
                <hr className="w-100" />
            </Container>
            <Container className="d-flex justify-content-around mt-3">
                <div>
                    <p>
                        <span className="fw-bold title-text">ADDRESS</span><br /><br />
                        Nasipit Street,<br />
                        Nasipit, Agusan Del Norte, PH
                    </p>
                </div>
                <div>
                    <p>
                        <span className="fw-bold title-text">CONTACT US</span><br /><br />
                        Facebook Page<br />
                        Contact Number
                    </p>
                </div>
                <div>
                    <p>
                        <span className="fw-bold title-text">ABOUT</span><br /><br />
                        How it works<br />
                        Info
                    </p>
                </div>
            </Container>
            <Navbar bg="secondary" className="d-flex justify-content-around mt-3 p-3">
                <div>
                    <h5 className="text-white">
                        @2024 Engineering Office. All Rights Reserved
                    </h5>
                </div>
                <div className="fw-bold text-white">
                    Privacy Policy&nbsp;&nbsp;
                    Terms of Use
                </div>
            </Navbar>
        </>
    );
}

export default ApplicationForm;