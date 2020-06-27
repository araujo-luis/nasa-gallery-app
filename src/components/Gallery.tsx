import React, { FC, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';
import { useSelector } from 'react-redux';
import { selectDate } from '../reducers/date';
import getImageByDate from '../services/nasaImage';
import { NasaImage } from '../interfaces';

const Gallery: FC = () => {

    const date = useSelector(selectDate);

    const [nasaImage, setNasaImage] = useState<NasaImage>();

    const handleSelect = (selectedIndex: any, e: any) => {
        console.log(selectedIndex, e.target);
    };
    const handleSlide = (selectedIndex: any) => {
        console.log("slide", selectedIndex);
    };

    useEffect(() => {
        getImageByDate(date)
            .then((image: NasaImage) => { setNasaImage(image || null) })
            .catch(err => console.log("something wrong", err));

    }, [date]);

    return (
        <div className="container">
            <Carousel className="nasa-carousel" onSlide={handleSlide} onSelect={handleSelect} interval={null} indicators={false}>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nasaImage ? nasaImage.url : ''}
                        alt={nasaImage ? nasaImage.title : ''}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <LikeButton />
                <GalleryDatePicker />
            </Carousel>

        </div >
    )
}

export default Gallery;
