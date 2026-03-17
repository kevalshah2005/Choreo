import React, { Component } from "react";
import * as FieldDimensions from "./FieldDimensions";

type Props = object;
type State = object;

const gray = "rgb(66,66,66)";

export default class FieldImage2025 extends Component<Props, State> {
  WIDTH_M = FieldDimensions.FIELD_WIDTH;
  LENGTH_M = FieldDimensions.FIELD_LENGTH;

  render() {
    return (
      <g id="layer1" transform={`scale(1, -1) translate(0, ${-this.WIDTH_M})`}>
        <g
          id="field-outline"
          transform={`scale(${this.WIDTH_M / 420})`} // scale based on viewBox height
        >
          {/* Simple bounding rectangle as placeholder */}
          <rect
            x="0"
            y="0"
            width="421"
            height="420"
            fill={gray}
            opacity="0.1"
            stroke="black"
            strokeWidth="2"
          />
        </g>
      </g>
    );
  }
}
