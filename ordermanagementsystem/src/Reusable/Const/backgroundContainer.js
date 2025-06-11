const styles = {
  bgContainer: {
    backgroundColor: "#e5e5ff",
    minHeight: "100vh",
    margin: "10px 10px 0 10px",
    borderTopLeftRadius: "2rem",
    borderTopRightRadius: "2rem",
    display: "flex",
    justifyContent: "center", 
  },
};

const BackgroundContainer = ({ children }) => {
  return (
    <div style={styles.bgContainer}>
      {children}
    </div>
  );
};

export default BackgroundContainer;
