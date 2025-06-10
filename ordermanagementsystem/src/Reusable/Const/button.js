const Button = ({
  width = "100px",
  height = "50px",
  children,
  onClick,
  color = "white",
  fontSize = "24px",
  fontWeight = "500",
  backgroundColor = "rgb(38, 83, 227",
  borderRaidus = "10px",
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
          borderRadius: borderRaidus,
          fontSize: fontSize,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
