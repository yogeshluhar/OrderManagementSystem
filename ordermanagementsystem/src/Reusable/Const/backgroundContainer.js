const styles = {
  bgContainer: {
    backgroundColor: "#e5e5ff",
    minHeight: "100vh",
    padding: "20px 10px",
    margin: "10px 10px 0 10px",
    borderTopLeftRadius: "2rem",
    borderTopRightRadius: "2rem",
    display: "flex",
    justifyContent: "center", // 👈 center the inner content
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
      <div style={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default BackgroundContainer;
