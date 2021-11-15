import React from "react";
import { useState } from "react";
import { Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

const YellowCheckbox = withStyles({
  root: {
    color: yellow[800],
    "&$checked": {
      color: yellow[1200],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Quest = ({ data }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <li
        className="checked {checked}"
        style={{
          textDecoration: checked ? "line-through #ffb703" : "none",
        }}
      >
        <YellowCheckbox checked={checked} onChange={handleChange} />
        <label>
          <span className="item-name">{data}</span>
        </label>
      </li>
    </div>
  );
};

export default Quest;
