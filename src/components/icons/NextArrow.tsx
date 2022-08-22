import React from 'react';

export default function NextArrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19.5"
        y="19.5"
        width="19"
        height="19"
        rx="4.5"
        transform="rotate(-180 19.5 19.5)"
        fill="white"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 10L9 14L9 6L13 10Z"
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
