import PropTypes from "prop-types";
function LogoComponent({ width, height }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={width}
        height={height}
      >
        <path d="M 12 4 C 9.8026661 4 8 5.8026661 8 8 C 5.8026661 8 4 9.8026661 4 12 L 4 24 C 4 26.197334 5.8026661 28 8 28 L 20 28 C 22.197334 28 24 26.197334 24 24 C 26.197334 24 28 22.197334 28 20 L 28 8 C 28 5.8026661 26.197334 4 24 4 L 12 4 z M 12 6 L 24 6 C 25.116666 6 26 6.8833339 26 8 L 26 20 C 26 21.116666 25.116666 22 24 22 L 11 22 C 10.43497 22 10 21.56503 10 21 L 10 14 L 12 14 L 12 18 C 12 19.093063 12.906937 20 14 20 L 18 20 L 20 20 L 22 20 C 23.093063 20 24 19.093063 24 18 L 24 11 C 24 9.3550302 22.64497 8 21 8 L 10 8 C 10 6.8833339 10.883334 6 12 6 z M 8 10 L 21 10 C 21.56503 10 22 10.43497 22 11 L 22 18 L 20 18 L 20 14 C 20 12.906937 19.093063 12 18 12 L 14 12 L 12 12 L 10 12 C 8.9069372 12 8 12.906937 8 14 L 8 21 C 8 22.64497 9.3550302 24 11 24 L 22 24 C 22 25.116666 21.116666 26 20 26 L 8 26 C 6.8833339 26 6 25.116666 6 24 L 6 12 C 6 10.883334 6.8833339 10 8 10 z M 14 14 L 18 14 L 18 18 L 14 18 L 14 14 z"></path>
      </svg>
    </div>
  );
}
LogoComponent.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default LogoComponent;
