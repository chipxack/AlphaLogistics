function SvgArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 35 35"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32.73 2.31h1.5a1.5 1.5 0 00-1.5-1.5v1.5zM5.796 3.81H32.73v-3H5.796v3zm25.434-1.5v26.93h3V2.31h-3zM2.41 34.75L33.75 3.41 31.63 1.29.289 32.63l2.121 2.12z"
      ></path>
    </svg>
  );
}

export default SvgArrow;
