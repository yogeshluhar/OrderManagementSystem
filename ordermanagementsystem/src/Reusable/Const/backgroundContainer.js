
const styles = {
    bgContainer: {
        backgroundColor: "#e5e5ff",
        minHeight: "100vh",
        padding: "20px",
        margin: '10px 10px 0 10px',
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem"
    },
};
const BackgroundContainer = ({ children }) => {
    return (
        <>
            <div style={styles.bgContainer}>
                {children}
            </div>
        </>
    );
}

export default BackgroundContainer;