import moment from "moment";
import React, { useState } from "react";
import _ from "lodash";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Day from "../Day";
import Flex from "../Flex";
import styled from "styled-components";
import Typography from "../Typography";
import { colors } from "../../config/genericStyles";

const DayOuter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc((100% / 7) - 12px);
  margin-right: 12px;
`;
const ChangeWeek = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 100%;
    padding: 7px;
    cursor: pointer;
    &.disabled {
      opacity: 0.5;
    }
    &.profPic {
      background-color: ${colors.purple};
      border-color: ${colors.purple};
      color: ${colors.white};
    }
  }
`;

export default function Calendar({ post, user }) {
  // Mapping, grouping and sorting the data to be used according to our needs
  const obj = post.timeslots
    .map((x) => {
      let obj = {
        datez: x,
        date: moment(x).format("DD/MM/YY"),
        time: moment(x).format("HH:mm"),
      };
      return obj;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
  const groupedData2 = _.groupBy(obj, "date");
  const dataa = Object.entries(groupedData2);

  const daysToShow = 7;
  const [firstDay, setFirstDay] = useState(0);
  const [lastDay, setLastDay] = useState(daysToShow);

  // Functions to compliment data mapping to show only 7 days - Next and Previous buttons
  const nextWeek = () => {
    if (lastDay >= dataa.length) return;
    setFirstDay(firstDay + daysToShow);
    setLastDay(lastDay + daysToShow);
  };
  const lastWeek = () => {
    if (firstDay === 0) return;
    setFirstDay(firstDay - daysToShow);
    setLastDay(lastDay - daysToShow);
  };

  return (
    <>
      {/* Showing the next 7 days or previous 7 days - button is disabled if previous or next weeks are not available */}
      <ChangeWeek>
        <div
          className="profPic"
          onClick={() => alert("You are logged in as " + user)}
        >
          {user.charAt(0).toUpperCase()}
        </div>
        <div
          onClick={() => lastWeek()}
          className={firstDay === 0 ? "disabled" : ""}
        >
          <FiChevronLeft color={colors.lightGrey} size={20} />
        </div>
        <div
          onClick={() => nextWeek()}
          className={lastDay >= dataa.length ? "disabled" : ""}
        >
          <FiChevronRight color={colors.lightGrey} size={20} />
        </div>
        <Typography
          dimmed
          style={{
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {moment(dataa.timeslots).format("MMMM YYYY")}
        </Typography>
      </ChangeWeek>
      <Flex>
        {/* Groupping slots by day showing only the first 7 days starting from tomorrow - Using useState above to achieve that */}
        {/* 1. Group slots by day */}
        {/* 2. Render the slots for the next 7 days starting tomorrow. Each slot should have the length determined by the `timeslotLengthMinutes` returned by the server. */}
        {dataa.slice(firstDay, lastDay).map((dayEntry, idx) => (
          <React.Fragment key={idx}>
            <DayOuter>
              <Day
                dateArray={dayEntry}
                timeslotLength={post.timeslotLengthMinutes}
              />
            </DayOuter>
          </React.Fragment>
        ))}
      </Flex>
    </>
  );
}
