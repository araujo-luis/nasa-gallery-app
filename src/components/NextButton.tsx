import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDate, changeDate } from "../reducers/date";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const NextButton: FC = () => {
    const format = "YYYY-MM-DD";
    const today = moment().format(format);
    const date = useSelector(selectDate);
    const dispatch = useDispatch();

    const next = () => {
        const addOneDay = moment(date).add(1, 'days');
        console.log({ addOneDay })
        if (addOneDay.isSameOrBefore(today))
            dispatch(changeDate(addOneDay.format(format)));
        else
            console.log('cant not be greater than today');

    };
    return (
        <button onClick={next} className="carousel-control-next" ><FontAwesomeIcon icon={faArrowRight} /></button>
    )
}

export default NextButton;