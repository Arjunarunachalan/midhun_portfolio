import React from "react";

const HeroImage = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_75_10"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1920"
        height="1080"
      >
        <rect width="1920" height="1080" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_75_10)">
        <rect
          x="-1190"
          y="-863"
          width="4026"
          height="2684"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_75_10"
            transform="scale(0.000244141 0.000366211)"
          />
        </pattern>
        <image
          id="image0_75_10"
          width="4096"
          height="2731"
        />
      </defs>
    </svg>
  );
};

export default HeroImage;