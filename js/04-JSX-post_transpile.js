"use strict";

const rootElement = /*#__PURE__*/ React.createElement(
  "div",
  {
    className: "pad",
  },
  /*#__PURE__*/ React.createElement(
    "h1",
    {
      className: "heading",
    },
    "Languages"
  ),
  /*#__PURE__*/ React.createElement(
    "ul",
    null,
    /*#__PURE__*/ React.createElement("li", null, "Javascript"),
    /*#__PURE__*/ React.createElement("li", null, "Java"),
    /*#__PURE__*/ React.createElement("li", null, "Python")
  )
);
ReactDOM.render(rootElement, document.getElementById("mount-point"));
