import React, { useState } from 'react'
import Exhibition from "./Exhibition";
import Overlay from './Overlay';
import Modal from './Modal';

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

const openModal = () => {
  setOpen(true);
};

const closeModal =() => {
  setOpen(false);
};

  return (
   <>
   <Exhibition  data={data} open={openModal} />
   {open && (
    <Overlay close={closeModal}>{<Modal data={data} />}</Overlay>
    )}
   </>
  );
};

export default Card;
