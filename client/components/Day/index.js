import moment from "moment";
import React from "react";

import Flex, { FlexItem } from "../Flex";
import Typography from "../Typography";

export default function Day({ dateArray }) {
  // console.log(dateArray);
  // return false;
  return (
    <FlexItem seven>
      <Flex margin="0 0 10px" alignCenter>
        <Typography margin="0 5px 0 0" bold>
          {/* Monday {`--- ${date} ---`} */}
        </Typography>
        <Typography margin="0" bold small dimmed>
          Dec 15
        </Typography>
      </Flex>
      <Flex>
        <div>
          {`Date: ${dateArray[0]}`}
          {dateArray[1].map((item, i) => (
            <p
              key={i}
              style={{
                display: "block",
                width: "100%",
                border: "1px solid green",
              }}
            >
              {`time: ${moment(item.datez).format("LT")}`}
            </p>
          ))}
        </div>
        {/* <div>5:30pm – 6:30pm</div>
        <div>6:00pm – 7:00pm</div> */}
      </Flex>
    </FlexItem>
  );
}
