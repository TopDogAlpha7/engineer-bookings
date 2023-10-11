import React from 'react';

const RatingFilter = ({ selectedRatings, onRatingChange }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3 className="text-2xl text-black-600 font-medium capitalize my-2 sm:my-7 text-left justify-center ">Ratings:</h3>
      {ratings.map((rating) => (
        <div key={rating}>
          <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
            <input
              type="checkbox"
              value={rating}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
              checked={selectedRatings.includes(rating)}
              onChange={() => onRatingChange(rating)}
            />
            {rating}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;