import * as React from "react";
import { Range, getTrackBackground } from "react-range";

// max={450 000}
// min={120 000}

// Copy of TwoThumbs with `draggableTrack` prop added
const RangeInputTest = (props) => {
  const STEP = 1000;
  const MIN = 120000;
  const MAX = 1200000;

  const [values, setValues] = React.useState([420000, 720000]);

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
        step={STEP}
        min={MIN}
        max={MAX}
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
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#F3D5BF", "#FB7A1A", "#F3D5BF"],
                  min: MIN,
                  max: MAX,
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
            className="h-5 w-5 rounded-full | relative"
          >
            {console.log(props, `some props =====`)}
            {props.key === 0 && (
              <div className="block w-[4rem] font-bold text-orange-primary bg-[#F6FBFC] text-xs absolute bottom-5 -left-5">
                {humanReadable(values[0].toFixed(0))}
              </div>
            )}
            {props.key === 1 && (
              <div className="text-xs w-[4rem] font-bold text-orange-primary bg-[#F6FBFC] absolute bottom-5 -left-5">
                {humanReadable(values[1].toFixed(0))}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

function humanReadable(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default RangeInputTest;
