import * as React from "react";
import { Range } from "react-range";
export function getTrackBackground({
  values,
  colors,
  min,
  max,
  direction,
  rtl = false,
}) {
  const progress = values
    .slice(0)
    .sort((a, b) => a - b)
    .map((value) => ((value - min) / (max - min)) * 100);

  const middle = progress.reduce(
    (acc, point, index) =>
      `${acc}, ${colors[index]} ${point}%, ${colors[index + 1]} ${point}%`,
    ""
  );

  return `linear-gradient(${direction}, ${colors[0]} 0% ${middle}, ${
    colors[colors.length - 1]
  } 100%)`;
}

const RangeInput = (props) => {
  const [values, setValues] = React.useState([
    props.min + 50000,
    props.max - 50000,
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        draggableTrack
        values={values}
        step={props.move}
        min={props.min}
        max={props.max}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "7px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  //   colors: ["#FB7A1A", "white", "green"],
                  colors: ["#ccc", "#548BF4", "#ccc"],

                  min: +props.min + 100000,
                  max: +props.max + 100000,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              backgroundColor: "#FFF",
              boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.16)`,
            }}
            className="h-4 w-4 rounded-full"
          ></div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed(1)} - {values[1].toFixed(1)}
      </output>
    </div>
  );
};

export default RangeInput;
