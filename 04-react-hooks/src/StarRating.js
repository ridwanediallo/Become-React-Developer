import React, { useState } from 'react';

import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      ;
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

function Rate() {
  return <StarRating totalStars={10} />;
}

export default Rate;
