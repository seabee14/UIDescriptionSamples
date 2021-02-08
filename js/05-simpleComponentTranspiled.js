"use strict";

const DynamicLanguages = () => {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "pad",
    },
    /*#__PURE__*/ React.createElement(
      "h1",
      {
        className: "heading",
      },
      "Dynamic Languages (Component)"
    ),
    /*#__PURE__*/ React.createElement(
      "ul",
      null,
      /*#__PURE__*/ React.createElement("li", null, "Javascript"),
      /*#__PURE__*/ React.createElement("li", null, "PHP"),
      /*#__PURE__*/ React.createElement("li", null, "Python")
    )
  );
};

ReactDOM.render(
  /*#__PURE__*/ React.createElement(DynamicLanguages, null),
  document.getElementById("mount-point")
);
