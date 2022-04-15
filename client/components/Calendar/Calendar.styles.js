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
`;
