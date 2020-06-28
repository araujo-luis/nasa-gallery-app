import React, { FC, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectDate } from '../reducers/date';

import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';

import getImageByDate from '../services/nasaImage';
import { NasaImage } from '../interfaces';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
const { HideUntilLoaded } = require('react-animation/');


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

            <h1>{nasaImage ? nasaImage.title : ''}</h1>

            <div className="my-carousel">
                <div className="active carousel-item">
                    <HideUntilLoaded
                        imageToLoad={nasaImage ? nasaImage.url : ''} du
                        Spinner={() => <div>Loading...</div>}
                    >
                        <img className="d-block w-100" src={nasaImage ? nasaImage.url : ''} alt="" />
                    </HideUntilLoaded>
                    <NextButton />
                    <PrevButton />
                </div>
                <div className="options-container">
                    <LikeButton />
                    <GalleryDatePicker />

                </div>
                <div className="caption-container">
                    {nasaImage ? nasaImage.explanation : ''}
                </div>

            </div>

            {/* <Carousel className="nasa-carousel" interval={null} controls={false} indicators={false}>

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
            </Carousel> */}

        </div >
    )
}

export default Gallery;
