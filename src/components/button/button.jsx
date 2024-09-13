const CustomButton = (prop) => {
  const { text = "button", onPress = () => {}, bgColor = "blue" } = prop;
  const buttonText = "click me";
  const buttonStyles = { backgroundColor: bgColor , color:"white" };
  return (
    <button style={buttonStyles} onClick={onPress}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
