import { Col, Image, Row } from "react-bootstrap";

export default function Highlights() {
    return (
        <Row className="p-3">
            <Col className="d-flex justify-content-center align-items-center">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Meet ups</p>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Reviews</p>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Shoutouts</p>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Hiring</p>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Events</p>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>FAQs</p>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={"https://sig1.co/logo-1"}
                        style={{ height: "80px", marginBottom: "10px" }}
                        roundedCircle
                        thumbnail
                    />
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Mentors</p>
                </Col>


            </Col>
        </Row>
    );
}