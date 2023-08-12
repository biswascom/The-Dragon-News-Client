import { Col, Container, Row } from 'react-bootstrap';
import AllCategoryNews from '../pages/AllCategory/AllCategoryNews';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';
import NavigationBar from '../common/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Row>
                <Col xs={3}>
                    <AllCategoryNews></AllCategoryNews>
                </Col>
                <Col xs={6}>
                    <Outlet></Outlet>
                </Col>
                <Col xs={3}>
                    <h2>Google Login page</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;