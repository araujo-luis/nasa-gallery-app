import React, { FC, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LikeButton from './LikeButton';
import GalleryDatePicker from './GalleryDatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate, changeDate } from '../reducers/date';
import getImageByDate from '../services/nasaImage';
import { NasaImage } from '../interfaces';
import moment from 'moment';

const Gallery: FC = () => {
    const format = "YYYY-MM-DD";
    const today = moment().format(format);
    const date = useSelector(selectDate);
    const dispatch = useDispatch();
    const [nasaImage, setNasaImage] = useState<NasaImage>();

    const previous = () => {
        const subtractOneDay = moment(date).add(-1, 'days');
        dispatch(changeDate(subtractOneDay.format(format)));
    };
    const next = () => {
        const addOneDay = moment(date).add(1, 'days');
        console.log({ addOneDay })
        if (addOneDay.isSameOrBefore(today))
            dispatch(changeDate(addOneDay.format(format)));
        else
            console.log('cant not be greater than today');

    };

    useEffect(() => {
        getImageByDate(date)
            .then((image: NasaImage) => { setNasaImage(image) })
            .catch(err => console.log("something wrong", err));

    }, [date]);

    return (
        <div className="container">
            <span>{date}</span>
            <Carousel className="nasa-carousel" interval={null} indicators={false}>

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
                <button onClick={previous} style={{ position: "relative" }}>Prev</button>
                <button onClick={next} style={{ position: "relative" }}>Next</button>
                <GalleryDatePicker />
            </Carousel>

        </div >
    )
}

export default Gallery;
