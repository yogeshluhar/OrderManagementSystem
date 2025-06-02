export const DashboardStyleSheet = {
    dashboardMainTable: {
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "22px",
        boxShadow: "0 4px 8px rgba(73, 20, 141, 0.5)",
    },
    Admin: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },

    tableContent: {
        overflowX: "auto",
    },
    mainTable: {
        width: "100%",
        borderCollapse: "collapse",
    },
    th: {
        backgroundColor: "#f5f5f5",
        fontWeight: 600,
        textAlign: "left",
        padding: "12px 15px",
        borderBottom: "1px solid #ddd",
        fontSize: "14px",
    },
    td: {
        textAlign: "left",
        padding: "12px 15px",
        borderBottom: "1px solid #ddd",
        fontSize: "14px",
    },
    trHover: {
        backgroundColor: "#f9f9f9",
    },
    // checkboxId: {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     alignItems: "center",
    // },
    pagination: {
        marginTop: "1rem",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
    },
    page: {
        minWidth: "40px",
        textAlign: "center",
        padding: "8px 12px",
        borderRadius: "6px",
        backgroundColor: "#f2f2f2",
        transition: "0.2s ease",
        boxSizing: "border-box",
    },
    pageActive: {
        backgroundColor: "#292965",
        color: "white",
        fontWeight: "bold",
    },
    arrow: {
        minWidth: "40px",
        textAlign: "center",
        padding: "8px 12px",
        borderRadius: "6px",
        transition: "0.2s ease",
    },
    arrowDisabled: {
        pointerEvents: "none",
        opacity: 0.4,
    },
};