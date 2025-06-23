const styles = {
  bgContainer: {
    backgroundColor: "#d9e6ff",
    height: '100vh',
    // maxHeight: '100vh',
    margin: "10px 10px 0 10px",
    borderTopLeftRadius: "2rem",
    borderTopRightRadius: "2rem",
    display: "flex",
    justifyContent: "center", 
    padding: '10px',
    // overflowY: "auto", 
  },
  // innerContainer: {
  //   width: "100%",
  //   maxWidth: "800px", 
  //   overflow: 'hidden',
  //   justifyContent: "center", 
  // },
};

const BackgroundContainer = ({ children }) => {
  return (
    <div style={styles.bgContainer} className="hide-scrollbar">
      {/* <div style={styles.innerContainer}>{children}</div> */}
      {children}
    </div>
  );
};

export default BackgroundContainer;
