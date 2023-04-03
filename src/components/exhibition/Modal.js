import React from 'react';
import './modal.css';
import {IoCloseCircleOutline} from 'react-icons/io5';

const Modal = ({data, close}) => {
    const {
        imageUrl,
        price, 
        address,
        numBedroom,
        numWashroom,
        livingSpace,
        description
    } = data;

  return (
    <div className="modal">
      <img className="modal__image" alt="exhibition image" src={imageUrl} />
        <div className="modal__info">
            <div className="modal__row">
                <span className="modal__title">{price}</span>
            </div>
            <div className="modal__row">
                <span className="modal_aritst">{numBedroom}</span>
            </div>
            <div className="modal__row">
                <span className="modal__gallery">{address}</span>
            </div>
            <div className="modal__row">
                <span className="modal__description">
                    {description}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Modal
