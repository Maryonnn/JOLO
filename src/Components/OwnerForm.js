import NavBar from "./NavBar.js";
import { 
    Container, Card, 
    Form, Row, Col,
    Button, FloatingLabel,
    Navbar
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function OwnerForm(){
    const navigate = useNavigate();

    function navigateToBuilding(){
        navigate("/building-profile");
    }

    function navigateToApplication(){
        navigate("/application-form");
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
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Last Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="last name" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="First Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="first name" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Middle Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="middle name" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Extension Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="extension name" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Province"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Province" />
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
                                        <Form.Control type="text" placeholder="baranggay" />
                                    </FloatingLabel>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Zip Code"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="zip code" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Street"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Street" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="House No."
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="house no." />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Contact No."
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="tin" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email Address"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="Email Address" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="TIN"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="TIN" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Government Issued ID No"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="Government Issued ID No" />
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
                                                label="Place Issued"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="Place Issued" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center">
                                        <p className="text-muted">
                                            Note: Type "N/A" if place of issuance is unknown.
                                        </p>
                                    </div>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Lot Owner's Fullname"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="Lot Owner's Fullname" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Lot Address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="Lot Address" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Lot Owner's Identification"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="Lot Owner's Identification" />
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
                                                label="Place Issued"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="Place Issued" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center">
                                        <p className="text-muted">
                                            Note: Type "N/A" if place of issuance is unknown.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                        <Container className="d-flex justify-content-center mt-5">
                            <Button 
                                variant="outline-success" 
                                className="w-25 fw-bold p-3 me-3"
                                onClick={navigateToApplication}
                            >
                                Back
                            </Button>
                            <Button variant="outline-primary" className="w-25 fw-bold p-3 me-3">Save as Draft</Button>
                            <Button 
                                variant="success" 
                                className="w-25 fw-bold p-3"
                                onClick={navigateToBuilding}
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

export default OwnerForm;