import React, { FC } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { selectDate, changeDate } from "../reducers/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PrevButton: FC = () => {
    const format = "YYYY-MM-DD";
    const date = useSelector(selectDate);
    const dispatch = useDispatch();

    const previous = () => {
        const subtractOneDay = moment(date).add(-1, 'days');
        dispatch(changeDate(subtractOneDay.format(format)));
    };
    return (
        <button onClick={previous} className="carousel-control-prev"><FontAwesomeIcon icon={faArrowLeft} /></button>
    )
}

export default PrevButton;