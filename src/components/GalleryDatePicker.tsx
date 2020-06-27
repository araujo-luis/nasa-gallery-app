import React, { FC, useState, ChangeEvent } from 'react';
import moment from 'moment';
import { changeDate } from "../reducers/date";
import { useDispatch } from 'react-redux';

const GalleryDatePicker: FC = () => {
    const today = moment().format("YYYY-MM-DD");
    const dispatch = useDispatch();
    const [date, setDate] = useState(today);

    const onChangeDate = (currentDate: string)=>{
        setDate(currentDate)
        console.log("stateChanged", currentDate)
    }
    return(
        <input type="date"
        className="datepicker"
        max={today}
        value={date}
        onChange= {(date: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeDate(date.target.value));
            onChangeDate(date.target.value)
        }}
        name="date"></input>
    );
}

export default GalleryDatePicker;
