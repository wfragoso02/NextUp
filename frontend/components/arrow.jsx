import React from 'react';

const Arrow = ({ shift, id, changeShift, direction }) => {
  const newShift = direction === 'left' ? shift - 1 : shift + 1;
  const multiplier = direction === 'left' ? 19 : -19;

  const makeShift = () => {
    const elements = document.getElementsByClassName(`${id}`);
    Array.from(elements).map(element => {
      const leftIdx = element.style.transform.indexOf("(") + 1;
      const rightIdx = element.style.transform.indexOf(")") - 2;
      element.style.transform.length < 1 ? 
        element.style.transform = `translateX(${multiplier}vw)` :
        element.style.transform = `translateX(${Number(element.style.transform.slice(leftIdx, rightIdx)) + multiplier}vw)`;
    });
    changeShift(newShift);
  };

  return (
    <>
      <button className={`slider_${direction}`} onClick={() => makeShift()}><i className={`fas fa-chevron-${direction}`}></i></button>
    </>
  )
};

export default Arrow;