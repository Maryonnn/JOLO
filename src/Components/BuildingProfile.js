import NavBar from "./NavBar.js";
import { 
    Container, Card, 
    Form, Row, Col,
    Button, FloatingLabel,
    Navbar
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BuildingProfile(){
    const navigate = useNavigate();

    function navigateToOwner(){
        navigate("/owner-form");
    }

    return(
        <>
            <NavBar />
            <Container className="d-flex justify-content-center mt-5 mb-3">
                <h2 className="title-text">BUILDING PERMIT APPLICATION</h2>
            </Container>
            <Container>
                <Card className="card-form">
                    <Card.Body className="p-5">
                        <Form>
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Province"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="province" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="City/Municipality"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="City/Municipality" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Baranggay"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Baranggay" />
                                    </FloatingLabel>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Lot No."
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Lot No." />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Block No."
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Block No." />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="TCT No."
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="TCT No." />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Current Tax Declare No"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Current Tax Declare No" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="For Construction Owned by an Enterprise"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="For Construction Owned by an Enterprise" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingSelect" label="Form of Ownership">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Single form of ownership</option>
                                            <option>Single proprietorship</option>
                                            <option>Cooperative</option>
                                            <option>Corporation</option>
                                            <option>Joint Venture</option>
                                            <option>Partnership</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                    <Form.Label className="fw-bold title-text mt-5 mb-3">SCOPE OF WORK</Form.Label><br />
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Check
                                                        label="New Construction"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Addition"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Renovation"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Repair"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Raising"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Legalization of Existing Building"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Check
                                                        label="Erection"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Alteration"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Conversion"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Moving"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                    <Form.Check
                                                        label="Accessory /Building Structure"
                                                        name="group1"
                                                        className="fs-5"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                </Col>

                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Project Title"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Project Title" />
                                    </FloatingLabel>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Select Date"
                                                className="mb-3"
                                            >
                                                <Form.Control type="date" placeholder="select date" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Number of Units"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="Number of Units" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Number of Storeys"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Number of Storeys" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Total Floor Area(sqm)"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="Total Floor Area(sqm)" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Lot Area(sqm)"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Lot Area(sqm)" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Total Estimated Cost"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="Total Estimated Cost" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div>
                                        <p className="fw-bold mt-5">CONTRACTING MANAGER (IF AVAILABLE)</p>
                                    </div>
                                    <FloatingLabel
                                         controlId="floatingInput"
                                        label="Authorized Managing Officer"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="Authorized Managing Officer" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Form>
                        <Container className="d-flex justify-content-center mt-5">
                            <Button 
                                variant="outline-success" 
                                className="w-25 fw-bold p-3 me-3"
                                onClick={navigateToOwner}
                            >
                                Back
                            </Button>
                            <Button variant="outline-primary" className="w-25 fw-bold p-3 me-3">Save as Draft</Button>
                            <Button variant="success" className="w-25 fw-bold p-3">Submit</Button>
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

export default BuildingProfile;