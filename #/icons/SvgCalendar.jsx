function SvgCalendar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fillRule="evenodd"
        stroke="#9A999B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.103"
        d="M3.143 4.488c0-.61.493-1.103 1.103-1.103h13.508c.61 0 1.103.494 1.103 1.103v14.717c0 .609-.494 1.103-1.103 1.103H4.246c-.61 0-1.103-.494-1.103-1.103V4.488z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#9A999B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.103"
        d="M14.143 1.666v3.733M7.857 1.666v3.733M3.143 8.46h15.714"
      ></path>
    </svg>
  );
}

export default SvgCalendar;
