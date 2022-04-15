import React from "react";
import PropTypes from "prop-types";

import { StyledHeader } from "./Header.styles";
import Typography from "../Typography";

export default function Header({ calendarName }) {
  return (
    <StyledHeader>
      <Typography
        text-medium
        as="h3"
        fontWeight="500"
        style={{ fontSize: "21px" }}
      >
        Schedule a meeting with {calendarName}
      </Typography>
      <Typography dimmed style={{ fontSize: "13px" }}>
        Please pick a time slot below.
      </Typography>
    </StyledHeader>
  );
}

Header.propTypes = {
  calendarName: PropTypes.string.isRequired,
};
