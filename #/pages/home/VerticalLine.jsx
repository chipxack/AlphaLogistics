function VerticalLine(props) {
  return (
    <>
      <div
        className="h-full border-l border-[#5D5D5F] | absolute left-[5%] top-0 overflow-hidden"
        style={{
          borderColor: `rgba(93, 93, 95, 0.${props.opacity})`,
        }}
      ></div>
      <div
        className="h-full border-l border-[#5D5D5F] | absolute left-[6.6%] top-0 overflow-hidden"
        style={{
          borderColor: `rgba(93, 93, 95, 0.${props.opacity})`,
        }}
      ></div>
    </>
  );
}

export default VerticalLine;
