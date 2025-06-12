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
  flex
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
          flex : flex
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
