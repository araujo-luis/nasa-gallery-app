import React, { FC, useState, ChangeEvent } from 'react';
import moment from 'moment';

const GalleryDatePicker: FC = () => {
    const today = moment().format("YYYY-MM-DD");
    const [date, setDate] = useState(today);

    const onChangeDate = (currentDate: string)=>{
        setDate(currentDate)
        console.log(currentDate)
    }
    return(
        <input type="date"
        className="datepicker"
        max={today}
        value={date}
        onChange={(date: ChangeEvent<HTMLInputElement>) => onChangeDate(date.target.value)}
        name="birthday"></input>
    );
}

export default GalleryDatePicker;
