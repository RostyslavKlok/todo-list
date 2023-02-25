import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 500px;
  min-width: 500px;
  height: auto;
  min-height: 500px;
  background-color: ${(props) => props.theme.colors.mainWrapperBackgroundColor};
  margin-top: 90px;
  margin-bottom: 90px;
  border-radius: 40px;
  box-shadow: 0 0 40px 2px black;
`;
