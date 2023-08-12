/* eslint-disable react/prop-types */

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryWiseNews = ({ category }) => {
    const { _id, title, details, image_url } = category;
    return (
        <Card className="mb-2">
            <Card.Body>
                <Card.Title className="mb-4 fw-bold">{title}</Card.Title>
                <Card.Img className="mb-3" src={image_url} alt="Card image" />
                <Card.Text>
                    {
                        details.length > 250 ? <>{details.slice(1, 250)}... <Link to={`/category/news/${_id}`}>See Details</Link></> : <div>{details}</div>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CategoryWiseNews;