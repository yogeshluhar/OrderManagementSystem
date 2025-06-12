const Button = ({
  width ,
  height ,
  children,
  onClick,
  color = "white",
  fontSize = "24px",
  fontWeight = "500",
  backgroundColor ,
  borderRadius = "5px",
  flex, 
  boxShadow = ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          color: color,
          border: "none",
          fontWeight: fontWeight,
          cursor: "pointer",
          borderRadius: borderRadius,
          fontSize: fontSize,
          flex : flex,
          boxShadow: boxShadow
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
