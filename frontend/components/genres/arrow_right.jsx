import React from 'react';

const ArrowLeft = ({ shift, genre, changeShift }) => {

  const shiftRight = () => {
    const elements = document.getElementsByClassName(`${genre.id}`);
    Array.from(elements).map(element => {
      const leftIdx = element.style.transform.indexOf("(") + 1;
      const rightIdx = element.style.transform.indexOf(")") - 2;
      element.style.transform.length < 1 ?
        element.style.transform = "translateX(-19vw)" :
        element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx, rightIdx)) - 19}vw)`;
    });
    changeShift(shift + 1);
  };

  return (
    <>
      <button className="slider_right" onClick={() => shiftRight()}><i className="fas fa-chevron-right"></i></button>
    </>
  )
}

export default ArrowLeft;