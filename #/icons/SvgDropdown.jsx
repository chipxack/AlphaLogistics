function SvgDropdown(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 10"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M16.505 1.025l-7.5 7.502-7.502-7.502"
      ></path>
    </svg>
  );
}

export default SvgDropdown;
