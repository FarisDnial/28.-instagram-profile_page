import { Col, Row, Container } from "react-bootstrap";
import ProfileHeader from "./components/ProfileHeader";
import { createContext, useState } from "react";
import { PROFILE_DATA } from "./data";
import ImageGrid from "./components/ImageGrid";
import Highlights from "./components/Highlights";
import AddPostModal from "./components/AddPostModal";
import Sidebar from "./components/Sidebar";

export const ProfileContext = createContext(null);

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row >
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}
        >
          <Sidebar onClick={openModal} />
        </Col>
        <Col
          sm={11}>
          <Container>
            <ProfileHeader />
            <Highlights />
            <ImageGrid />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>

  );
}
