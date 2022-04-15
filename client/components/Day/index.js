import moment from "moment";
import React, { useState } from "react";

import Flex, { FlexItem } from "../Flex";
import Typography from "../Typography";
import { colors } from "../../config/genericStyles";
import styled from "styled-components";

const DayInner = styled.div`
  width: 100%;
  background-color: ${colors.white};
  &.noAvailableSlots {
    background-color: ${colors.offwhite};
  }
`;
const AvailableSlot = styled.div`
  width: 100%;
  background-color: ${colors.blue};
  border-radius: 4px;
  margin-bottom: 8px;
  color: ${colors.white};
  font-size: 13px;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: ${colors.blueHover};
  }
`;
const DayCol = styled.div`
  display: flex;
  flex-direction: row;
`;
const ExpandTimes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  color: ${colors.blue};
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    color: ${colors.blueHover};
  }
`;
export default function Day({ dateArray, timeslotLength }) {
  const [expandHours, setExpandHours] = useState(6);

  const showMoreDates = () => {
    setExpandHours(expandHours === 6 ? dateArray[1].length : 6);
  };
  return (
    <>
      <DayInner className={dateArray[1].length !== 0 ? "" : "noAvailableSlots"}>
        <Flex margin="0 0 10px" alignCenter>
          <DayCol>
            <Typography margin="0 5px 0 0" small bold>
              {moment(dateArray[1][0].datez).format("ddd")}
            </Typography>
            <Typography small dimmed>
              {moment(dateArray[1][0].datez).format("MMM D")}
            </Typography>
          </DayCol>
        </Flex>
        <Flex justifyCenter>
          {dateArray[1].slice(0, expandHours).map((item, i) => (
            <AvailableSlot key={i} style={{}}>
              {moment(item.datez).format("hh:mmA").toLowerCase()} -{" "}
              {moment(item.datez)
                .add(timeslotLength, "minutes")
                .format("hh:mmA")
                .toLowerCase()}
            </AvailableSlot>
          ))}
        </Flex>
      </DayInner>
      {dateArray[1].length > 6 && (
        <ExpandTimes onClick={() => showMoreDates()}>
          {expandHours === 6 ? "More times" : "Fewer times"}
        </ExpandTimes>
      )}
    </>
  );
}
