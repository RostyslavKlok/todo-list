import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 100px;
  width: 100%;
  border-top: 2px solid rgb(233, 129, 148);
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
`;

export const FooterInput = styled.input`
  width: 60%;
  height: 50%;
  font-size: 20px;
  color: black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  padding-left: 20px;
`;

export const FooterButton = styled.button`
  width: 90px;
  height: 50%;
  border-radius: 20px;
  background-color: rgb(153, 241, 125);
  color: balck;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
`;
