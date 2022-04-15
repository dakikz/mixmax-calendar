import styled from "styled-components";
import { colors } from "../../config/genericStyles";

export const StyledCalendarWrapper = styled.div`
  border-radius: 4px;
  max-width: 1000px;
  box-shadow: rgb(45 45 45 / 12%) 0px 4px 12px;
  padding: 24px;
  position: relative;
  z-index: 2;
  background-color: ${colors.white};
  &:before {
    z-index: 1;
    bottom: -130px;
    right: -30px;
    content: "";
    position: absolute;
    width: 500px;
    height: 260px;
    background: rgb(215, 247, 235);
    background: -moz-linear-gradient(
      180deg,
      rgba(215, 247, 235, 1) 0%,
      rgba(215, 247, 235, 0) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(215, 247, 235, 1) 0%,
      rgba(215, 247, 235, 0) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(215, 247, 235, 1) 0%,
      rgba(215, 247, 235, 0) 100%
    );
  }
`;
