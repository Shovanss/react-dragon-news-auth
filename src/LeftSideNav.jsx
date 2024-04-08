import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div>
            <h3>All CAtegories : {categories.length}</h3>
            {
                categories.map(category=><Link className="block" key={category.id}
                to={`/category/${category.id}`}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;