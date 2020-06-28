import React, { FC, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer: FC = () => {

    return (
        <div className="footer">
               <p>Made with <FontAwesomeIcon className="love-icon" icon={faHeart}/> in Honduras. Luis Araujo 2020 </p>
        </div>
    )
}

export default Footer;