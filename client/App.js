import React, { useEffect, useState } from "react";

import Calendar from "./components/Calendar";
import { StyledCalendarWrapper } from "./components/Calendar/Calendar.styles";
import Flex from "./components/Flex";
import Header from "./components/Header";
import MixmaxUpsell from "./components/MixmaxUpsell";

const App = function () {
  const [calendarResponse, setCalendarResponse] = useState(null);
  const [userId] = useState("engtestuser1"); // Hardcoded userId, for now.

  const url = `/api/calendar?hostUserId=${userId}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCalendarResponse(response);
        // console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (!calendarResponse) {
    return (
      <Flex padding="16px" column alignCenter>
        Loading...
      </Flex>
    );
  }
  console.log("App - Rendering Calendar");
  // console.log(calendarResponse);

  return (
    <Flex padding="16px" column alignCenter>
      <Header calendarName={calendarResponse.name} />
      <StyledCalendarWrapper>
        <Calendar post={calendarResponse} user={userId} />
        <Flex justifyEnd>
          <MixmaxUpsell />
        </Flex>
      </StyledCalendarWrapper>
    </Flex>
  );
};

export default App;
