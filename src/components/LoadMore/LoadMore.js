import { useEffect, useState } from "react";
import "./LoadMore.css";

const BASE_URL = "https://dummyjson.com/products?"

function LoadMore({limit = 10}) {
    const[productArray, setProductArray] = useState(null)
    const[skip, setSkip] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPruducts = () => {
        setLoading(true);
        try {
            fetch(BASE_URL+`limit=${limit}&skip=${skip}`).then((response)=>(
                response.json()
            )).then((json)=>(
                setProductArray(json.products)
            )).then(()=>(setLoading(false)))
        } catch (error) {
            setError(error);
        }
    }

    const handleLoadMore = () => {
        setSkip(skip + limit)
    }

    useEffect(fetchPruducts,[skip])

    if (error !== null) {
        return (<div className="LoadMore">
            Encountered an Error: {error}
        </div>);
    }

    if (loading) {
        return (<div className="LoadMore"> 
            Loading Please Wait
        </div>);
    }

    return (<div className="LoadMore">
        {productArray && productArray.length > 0 && <div className="galleryContainer">
           {productArray.map((elem, index)=>(
            <div className="productContainer" key={index}>
                <img className="productPicture" src={elem["images"][0]} alt={elem["title"]}/>
                <p>{elem["title"]}</p>
                <p>$ {elem["price"]}</p>
            </div>
           ))}
        </div>}
        <button onClick={handleLoadMore}>Load More Data</button>
    </div>);
}

export default LoadMore;