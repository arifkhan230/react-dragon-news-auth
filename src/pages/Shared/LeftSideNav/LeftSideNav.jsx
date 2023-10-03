import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data => setCategories(data))
        

    },[])
    console.log(categories)
    return (
        <div className="space-y-6">
            <h2 className="text-2xl bg-gray-300 p-4">All Categories</h2>
            {
                categories.map(category => <Link 
                    to={`/category/${category.id}`}
                    className="block text-xl font-medium ml-8"
                    key={category.id}>{category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;