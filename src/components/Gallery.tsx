import React, { FC, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';

interface NasaImage {
    date: string,
    title: string,
    explanation: string,
    url: string,

}
const Gallery: FC = () => {
    console.log("API KEY", process.env.API_KEY);
    const [nasaImage, setNasaImage] = useState<NasaImage>();

    const handleSelect = (selectedIndex: any, e: any) => {
        console.log(selectedIndex, e.target);
    };
    const handleSlide = (selectedIndex: any) => {
        console.log("slide", selectedIndex);
    };
    useEffect(() => {

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=2020-06-27`)
            .then(res => res.json())
            .then(data => {
                console.log("nasa image", data)
                setNasaImage(data)
            });
    }, []);

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

                <LikeButton />
                <GalleryDatePicker />
            </Carousel>

        </div>
    )
}

export default Gallery;
