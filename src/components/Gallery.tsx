import React, { FC, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';
import { useSelector } from 'react-redux';
import { selectDate } from '../reducers/date';
interface NasaImage {
    date: string,
    title: string,
    explanation: string,
    url: string,

}
const Gallery: FC = () => {

    const date = useSelector(selectDate);
    
    const [nasaImage, setNasaImage] = useState<NasaImage>();

    const handleSelect = (selectedIndex: any, e: any) => {
        console.log(selectedIndex, e.target);
    };
    const handleSlide = (selectedIndex: any) => {
        console.log("slide", selectedIndex);
    };

    const handleButton = () => {
        console.log("click");
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`)
            .then(res => res.json())
            .then(data => {
                console.log("nasa image", data)
                setNasaImage(data)
            });
    }

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`)
            .then(res => res.json())
            .then(data => {
                console.log("nasa image", data)
                setNasaImage(data)
            });
    }, [date]);

    return (
        <div className="container">
            <Carousel className="nasa-carousel" onSlide={handleSlide} onSelect={handleSelect} interval={null} indicators={false}>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nasaImage ? nasaImage.url : ''}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <button onClick={handleButton} style={{ position: "relative" }}>Chnage</button>
                <LikeButton />
                <GalleryDatePicker />
            </Carousel>

        </div >
    )
}

export default Gallery;
