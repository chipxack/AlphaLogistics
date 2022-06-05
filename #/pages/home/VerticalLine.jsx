function VerticalLine(props) {
  return (
    <>
      <div
        className="h-full border-l border-[#5D5D5F] | absolute md:z-[4] left-[2.75%] md:left-[5%] top-0 overflow-hidden"
        style={{
          borderColor: `rgba(93, 93, 95, 0.${props.opacity})`,
        }}
      ></div>
      <div
        className="h-full border-l border-[#5D5D5F] | absolute md:z-[4] left-[4%] md:left-[6.6%] top-0 overflow-hidden"
        style={{
          borderColor: `rgba(93, 93, 95, 0.${props.opacity})`,
        }}
      ></div>
    </>
  );
}

export default VerticalLine;
