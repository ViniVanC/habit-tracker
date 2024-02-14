import React from "react";
import { Path, Svg } from "react-native-svg";

export const CheckMark = ({ color }) => {
  return (
    <Svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 6.59276C2.12056 8.41439 2.73077 8.61539 3.97036 9.30769C5.84615 5.15385 6.19231 3.76923 10 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
