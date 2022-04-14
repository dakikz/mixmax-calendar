import moment from "moment";
import React from "react";
import _ from "lodash";

import Day from "../Day";
import Flex from "../Flex";
import styled from "styled-components";

const CalendarOuter = styled.div`
  display: flex;
  border: 1px solid greenyellow;
`;

export default function Calendar({ post }) {
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

  return (
    <Flex>
      {dataa.map((dayEntry, idx) => (
        <CalendarOuter key={idx}>
          <strong>{moment(dayEntry[1][0].datez).format("ddd")}</strong>
          {moment(dayEntry[1][0].datez).format("MMM D")}
          <Day dateArray={dayEntry} />

          <br />
        </CalendarOuter>
      ))}
    </Flex>
  );
}
