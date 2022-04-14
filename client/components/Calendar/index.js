import moment from "moment";
import React from "react";
import _ from "lodash";

import Day from "../Day";
import Flex from "../Flex";

export default function Calendar({ post }) {
  console.log(post.timeslots);

  const obj = post.timeslots
    .map((x) => {
      let obj = {
        // date: moment(x).format("ddd MMM Do"),
        date: moment(x).format("DD/MM/YY"),
        time: moment(x).format("HH:mm"),
      };
      return obj;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
  console.log(obj);

  const groupedData2 = _.groupBy(obj, "date");

  // console.log(groupedData2);

  // const groupedData = _.groupBy(
  //   post.timeslots.map((v) => {
  //     let newObj = v;
  //     // console.log(v);
  //     console.log(v.split("T"));

  //     newObj = moment(v).format("MMMM Do YYYY");
  //     // newObj = v;
  //     // console.log(newObj);

  //     return newObj;
  //   })
  // );

  const dataa = Object.entries(groupedData2);
  console.log(dataa);

  return (
    <Flex>
      {dataa.map((v, idx) => (
        <React.Fragment key={idx}>
          {/* {moment(v).format("dddd, MMMM Do, YYYY")} */}
          <div
            style={{ display: "block", width: "100%", border: "1px solid red" }}
          >
            {`Date: ${v[0]}`}
            {v[1].map((item, i) => (
              <p
                key={i}
                style={{
                  display: "block",
                  width: "100%",
                  border: "1px solid green",
                }}
              >
                {`time: ${item.time}`}
                {/* {dataa.filter((item) => item === v)} */}
              </p>
            ))}

            {/* {moment(v[0]).format("MMMM Do YYYY, h:mm:ss a")} */}
          </div>
          <br />
        </React.Fragment>
      ))}
      {/* <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day /> */}
    </Flex>
  );
}
