function VerticalLine(props) {
  return (
    <>
      <div
        className="w-full border-b border-[#5D5D5F] | absolute md:top-0 md:z-20 overflow-hidden"
        style={{
          borderColor: `rgba(93, 93, 95, 0.${props.opacity})`,
        }}
      ></div>
      <div
        className="w-full border-b border-[#5D5D5F] | absolute top-[1.75%] md:top-[10%] overflow-hidden"
        style={{
          borderColor: `rgba(93, 93, 95, 0.${props.opacity})`,
        }}
      ></div>
    </>
  );
}

export default VerticalLine;
