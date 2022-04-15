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

  // Rendering bug, needs to be inside a useEffect in order to stop infinite rendering
  // 3. There is also a rendering bug in the initial implementation that you'll need to find and fix accordingly.
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCalendarResponse(response);
      });
  }, []);

  if (!calendarResponse) {
    return (
      <Flex padding="16px" column alignCenter>
        Loading...
      </Flex>
    );
  }

  return (
    <Flex style={{ padding: "28px 24px" }} column alignCenter>
      <Header calendarName={calendarResponse.name} />
      <StyledCalendarWrapper>
        <Calendar post={calendarResponse} user={userId} />
        <Flex justifyEnd style={{ marginTop: "30px" }}>
          <MixmaxUpsell />
        </Flex>
      </StyledCalendarWrapper>
    </Flex>
  );
};

export default App;
