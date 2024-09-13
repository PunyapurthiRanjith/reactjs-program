import { RotatingLines } from "react-loader-spinner";

const CustomRoundLoader = ({color}) => {
  return (
    <RotatingLines
      visible={true}
      height="100"
      width="100"
      color={color}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default CustomRoundLoader;
