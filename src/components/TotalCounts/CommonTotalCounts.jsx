import React from "react";

import {
  CommonCountWrapper,
  FullWidthCountWrapper,
  HalfWidthCountWrapperGreen,
  HalfWidthCountWrapperRed,
  NumberWrapper,
  TextWrapper,
} from "./CommonTotalCounts.style";

export const CommonTotalCounts = ({ width, number, text }) => {
  const handlerCountWrapper = (width) => {
    if (width === "50" && text === "Tasks") return HalfWidthCountWrapperGreen;
    if (width === "50" && text === "Deleted") return HalfWidthCountWrapperRed;
    if (width === "100") return FullWidthCountWrapper;
    return CommonCountWrapper;
  };

  const CurrentWrapper = handlerCountWrapper(width);
  return (
    <CurrentWrapper>
      <NumberWrapper>{number}</NumberWrapper>
      <TextWrapper>{text}</TextWrapper>
    </CurrentWrapper>
  );
};
