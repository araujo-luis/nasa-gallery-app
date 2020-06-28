/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { selectDate } from "../reducers/date";
import { selectLikedPhoto, addOrRemoveFavoritePhoto, isLiked } from "../reducers/favoritePhotos";

const LikeButton: FC = () => {
    const date = useSelector(selectDate);

    const dispatch = useDispatch();
    const isLikedPhoto = useSelector(selectLikedPhoto);

    const handleLike = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        dispatch(addOrRemoveFavoritePhoto(date));
        dispatch(isLiked(date));
    }
    return (
        <div className="like-button" >
            <a className={isLikedPhoto ? 'liked' : ''} onClick={handleLike} ><FontAwesomeIcon icon={faHeart} /></a>
        </div>
    )
}

export default LikeButton;