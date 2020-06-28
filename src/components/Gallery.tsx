import React, { FC, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectDate } from '../reducers/date';

import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';

import getImageByDate from '../services/nasaImage';
import { NasaImage } from '../interfaces';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const { HideUntilLoaded } = require('react-animation/');


const Gallery: FC = () => {
    const date = useSelector(selectDate);
    const [nasaImage, setNasaImage] = useState<NasaImage>();
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        getImageByDate(date)
            .then((image: NasaImage) => {
                setNasaImage(image);
                setShowError(false);
            })
            .catch(err => {
                console.log("something wrong", err)
                setShowError(true);
            });

    }, [date]);

    return (
        <div className="container">


            <div className="my-carousel col-md-8 col-sm-12">
                <h1 className="carousel-title">{nasaImage ? nasaImage.title : ''}</h1>
                <div className="active carousel-item">
                    <HideUntilLoaded
                        imageToLoad={nasaImage ? nasaImage.url : ''} du
                        Spinner={() => <div>Loading...</div>}
                    >

                        <Modal
                            size="lg"
                            show={showError}
                            onHide={() => setShowError(false)}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon> Error
                               </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>An error ocurred while trying to fetch NASA's API. Consider the following:
                                <ul>
                                    <li>Date must be between Jun 16, 1995 and today.</li>
                                    <li>API KEY is correct.</li>
                                    <li>API URl is correct.</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => setShowError(false)}>Close</Button>
                            </Modal.Footer>


                        </Modal>

                        <img className="d-block w-100 rounded" src={nasaImage ? nasaImage.url : ''} alt="" />

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
            <br /><br /><br />
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
