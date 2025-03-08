import React from 'react'

export const ListSkeleton = () => {
  return (
    <div className="w-full h-auto bg-white rounded-2xl my-5 p-3 border-1 border-grey animate-pulse">
    {Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="h-10 w-full bg-white-gray rounded-lg my-3"
      ></div>
    ))}
  </div>  )
}

export const CardSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse w-full h-22 bg-deep-gray mt-5 rounded-lg" />
      ))}
    </div>
  );
};

