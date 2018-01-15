import React from "react";

export const sprite = function sprite(id, viewBox = "0 0 1 1", classes = "") {
  const el = React.createElement(
    "span",
    {
      className: `sprite -${id} ${classes}`
    },
    React.createElement(
      "svg",
      {
        viewBox: viewBox
      },
      React.createElement("use", {
        xlinkHref: `images/icons.svg#${id}`
      })
    )
  );
  return el;
};
