function SvgPen(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="#fff" clipPath="url(#clip0_387_3154)">
        <path d="M.834 15.347v3.82h3.82L15.925 7.895l-3.82-3.82L.834 15.347zM18.87 3.51L16.49 1.13a1.02 1.02 0 00-1.441 0l-1.865 1.864 3.82 3.82 1.865-1.864a1.02 1.02 0 000-1.441z"></path>
      </g>
      <defs>
        <clipPath id="clip0_387_3154">
          <path
            fill="#fff"
            d="M0 0H18.333V18.333H0z"
            transform="translate(.834 .833)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPen;
