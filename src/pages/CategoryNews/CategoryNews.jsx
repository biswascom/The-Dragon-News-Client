import { Col, Container, Row } from "react-bootstrap";
import Header from "../../common/Header/Header";
import NavigationBar from "../../common/NavigationBar/NavigationBar";
import AllCategoryNews from "../AllCategory/AllCategoryNews";
import { useLoaderData } from "react-router-dom";
import CategoryWiseNews from "../CategoryWiseNews/CategoryWiseNews";

const CategoryNews = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <Container>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Row>
                <Col xs={3}>
                    <AllCategoryNews></AllCategoryNews>
                </Col>
                <Col xs={6}>
                    <div className="text-center text-decoration-underline mb-4">
                        <h4>This Category contains total news: {categories.length}</h4>
                    </div>
                    <div>
                        {
                            categories.map(category => <CategoryWiseNews key={category._id} category={category}></CategoryWiseNews>)
                        }
                    </div>
                </Col>
                <Col xs={3}>
                    <h2>Google Login page</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryNews;