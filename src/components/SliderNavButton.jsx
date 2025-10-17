import React from 'react';
import './SliderNavButton.css';

const icons = {
  prev: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  next: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

function SliderNavButton({ direction = 'prev', onClick, ariaLabel, className = '' }) {
  const isPrev = direction === 'prev';
  return (
    <button
      className={`slider-nav-btn ${isPrev ? 'slider-nav-btn-prev' : 'slider-nav-btn-next'} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || (isPrev ? 'Previous' : 'Next')}
      type="button"
    >
      {icons[direction]}
    </button>
  );
}

export default SliderNavButton;


