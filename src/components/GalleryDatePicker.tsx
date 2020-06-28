import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import moment from 'moment';
import { changeDate, selectDate } from "../reducers/date";
import { useDispatch, useSelector } from 'react-redux';
import { isLiked } from '../reducers/favoritePhotos';

const GalleryDatePicker: FC = () => {
    const today = moment().format("YYYY-MM-DD");
    const dispatch = useDispatch();
    const date = useSelector(selectDate);

    const onChangeDate = (currentDate: string) => {
        dispatch(changeDate(currentDate));
        dispatch(isLiked(currentDate));
        console.log("stateChanged", currentDate)
    }
    const disableManualInput = (e: KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
    }
    return (
        <input type="date"
            className="datepicker"
            max={today}
            onKeyDown={disableManualInput}
            value={date}
            onChange={(date: ChangeEvent<HTMLInputElement>) => onChangeDate(date.target.value)}
            name="date"></input>
    );
}

export default GalleryDatePicker;
