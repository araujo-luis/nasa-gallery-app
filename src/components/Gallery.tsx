import React, { FC, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { selectDate } from '../reducers/date';

import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';

import getImageByDate from '../services/nasaImage';
import { NasaImage } from '../interfaces';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Gallery: FC = () => {
    const date = useSelector(selectDate);
    const [nasaImage, setNasaImage] = useState<NasaImage>();

    useEffect(() => {
        getImageByDate(date)
            .then((image: NasaImage) => { setNasaImage(image) })
            .catch(err => console.log("something wrong", err));

    }, [date]);

    return (
        <div className="container">
            <span>{date}</span>
            <Carousel className="nasa-carousel" interval={null} controls={false} indicators={false}>

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
                <NextButton />
                <PrevButton />
                <GalleryDatePicker />
            </Carousel>

        </div >
    )
}

export default Gallery;
