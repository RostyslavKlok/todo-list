import styled from "styled-components";

export const CommonCountWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HalfWidthCountWrapper = styled(CommonCountWrapper)`
  width: 50%;
`;

export const HalfWidthCountWrapperGreen = styled(HalfWidthCountWrapper)`
  color: green;
`;

export const HalfWidthCountWrapperRed = styled(HalfWidthCountWrapper)`
  color: red;
`;

export const FullWidthCountWrapper = styled(CommonCountWrapper)`
  width: 100%;
`;

export const NumberWrapper = styled.p`
  font-size: 40px;
  margin-right: 10px;
  font-weight: 600;
`;

export const TextWrapper = styled.p`
  font-size: 40px;
  font-weight: 600;
`;
