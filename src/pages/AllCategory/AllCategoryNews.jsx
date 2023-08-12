import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './AllCategoryNews.css';

const AllCategoryNews = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories.id);

    return (
        <div>
            <h2>All Category</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-black news">{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default AllCategoryNews;