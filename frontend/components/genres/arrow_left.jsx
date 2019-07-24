import React from 'react';

const ArrowRight = ({ shift, genre, changeShift }) => {

  const shiftLeft = () => {
    // if (shift > 0) {
      const elements = document.getElementsByClassName(`${genre.id}`);
      Array.from(elements).map(element => {
        const leftIdx = element.style.transform.indexOf("(");
        const rightIdx = element.style.transform.indexOf(")");
        element.style.transform.length < 1 ? element.style.transform = "translateX(19vw)" :
          element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx + 1, rightIdx - 2)) + 19}vw)`;
      });
      changeShift(shift - 1);
    // }
  };

  return (
    <>
      <button className="slider_left" onClick={() => shiftLeft()}><i className="fas fa-chevron-left"></i></button>
    </>
  )
}

export default ArrowRight;