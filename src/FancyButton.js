import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    Click Me!
  </button>
));

export default FancyButton;
