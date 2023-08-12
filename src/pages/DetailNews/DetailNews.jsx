import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../common/Header/Header";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const DetailNews = () => {
    const newsDetails = useLoaderData();
    const { title, image_url, details } = newsDetails;

    const navigate = useNavigate();

    return (
        <Container>
            <Header></Header>
            <Row>
                <Col xs={9}>
                    <Card className="mb-2">
                        <Card.Body>
                            <Card.Title className="mb-4 text-center">{title}</Card.Title>
                            <Card.Img className="mb-3" src={image_url} alt="Card image" />
                            <Card.Text>
                                {details}
                                <span className="ms-3">
                                    <Link onClick={() => navigate(-1)}>Go Back</Link>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <h2>Google Login page</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailNews;