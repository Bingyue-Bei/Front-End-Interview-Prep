import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./ImageSlider.css"

const LIMIT = 10
const URL = `https://picsum.photos/v2/list?page=2&limit=${LIMIT}`

function ImageSlider() {
    const [selector, setSelector] = new useState(0);
    const [imageArray, setImageArray] = new useState(null);
    const [loading, setLoading] = new useState(false);
    const [error, setError] = new useState(null);

    const fetchImageArray = () => {
        try{
            setLoading(true);
            fetch(URL).then((response) => (
                response.json()
            )).then((json)=>(
                setImageArray(json)
            )).then(() => (
                setLoading(false)
            ))
        } catch (error) {
            setError(error);
        }
    }

    useEffect(fetchImageArray, [])
    
    const handleArrowLeft = () => {
        if (selector > 0) {
            setSelector(selector - 1)
        } else {
            setSelector(LIMIT - 1)
        }
    }

    const handleArrowRight = () => {
        if (selector < LIMIT - 1) {
            setSelector(selector + 1)
        } else {
            setSelector(0)
        }
    }

    if (error !== null) {
        return (<div>
            Encountered an error: {error}
        </div>);
    }

    if (loading ) {
        return (<div>Loading Images, please wait</div>);
    }

    return (<div className="imageSlider">
        <BsArrowLeftCircleFill className="arrow arrowLeft" onClick={handleArrowLeft}/>
        {imageArray && imageArray.length > 0 && <div className="imageContainer">
            {imageArray.map((elem, index)=>(
                <img key={index} className={selector === index? "" : "hiddenImage"}
                src={elem["download_url"]} alt={elem["download_url"]}/>
            ))}
        </div>}
        <BsArrowRightCircleFill className="arrow arrowRight"onClick={handleArrowRight}/>
        {imageArray && imageArray.length > 0 && <div className="dotContainer">
            {imageArray.map((_, index)=>(
                <span key={index} className={selector === index? "dot dotCurrent" : "dot"}
                    onClick={()=>{setSelector(index)}}></span>
            ))}
        </div>}
    </div>);
}

export default ImageSlider;