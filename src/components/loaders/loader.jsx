import { Oval } from "react-loader-spinner";

const CustomOval = ({ color, width }) => {
  return (
    <Oval
      visible={true}
      height="100"
      width={width}
      color={color}
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default CustomOval;
