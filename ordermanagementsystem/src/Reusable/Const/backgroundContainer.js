const styles = {
  bgContainer: {
    backgroundColor: "#d9e6ff",
    minHeight: "100vh",
    padding: "16px 15px",
    margin: "10px 10px 0 10px",
    borderTopLeftRadius: "2rem",
    borderTopRightRadius: "2rem",
    display: "flex",
    justifyContent: "center", // 👈 center the inner content
    // flexDirection: "column"
  },
  innerContainer: {
    width: "100%",
    maxWidth: "800px", 
    overflow: 'hidden'
  },
};

const BackgroundContainer = ({ children }) => {
  return (
    <div style={styles.bgContainer}>
      {/* <div style={styles.innerContainer}>{children}</div> */}
      {children}
    </div>
  );
};

export default BackgroundContainer;
