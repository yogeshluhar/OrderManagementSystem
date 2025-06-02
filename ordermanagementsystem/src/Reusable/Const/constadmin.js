import React, { useState, useEffect } from "react";
import axios from "axios";
import { DashboardStyleSheet } from "./stylesheet";
import "../StyleSheet/constadmin.css";

const AdminTableSheet = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;

    const fetchData = async (page) => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            const fullData = res.data;

            const start = (page - 1) * itemsPerPage;
            const paginated = fullData.slice(start, start + itemsPerPage);

            setData(paginated);
            setTotalPages(Math.ceil(fullData.length / itemsPerPage));
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const handlePageClick = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        fetchData(page);
    };

    useEffect(() => {
        fetchData(currentPage);
    }, []);

    return (
        <div style={DashboardStyleSheet.dashboardMainTable}>
        <div style={DashboardStyleSheet.Admin}>
            <h3 style={{ ...DashboardStyleSheet.AdminName, margin: "0px" }}>Admin</h3>
        </div>

        <div style={DashboardStyleSheet.tableContent}>
            <div className="responsive-table-container">
                <table style={DashboardStyleSheet.mainTable}>
                    <thead>
                        <tr>
                            <th style={{ ...DashboardStyleSheet.checkboxId, ...DashboardStyleSheet.th }}>
                                <input type="checkbox" name="ID" id="id-checker" />
                                <label htmlFor="id-checker">ID</label>
                            </th>
                            <th style={DashboardStyleSheet.th}>Name</th>
                            <th style={DashboardStyleSheet.th}>Country</th>
                            <th style={DashboardStyleSheet.th}>Phone</th>
                            <th style={DashboardStyleSheet.th}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} style={DashboardStyleSheet.trHover}>
                                <td style={{ ...DashboardStyleSheet.checkboxId, ...DashboardStyleSheet.td }} data-label="ID">
                                    <input type="checkbox" />
                                    {row.id}
                                </td>
                                <td style={DashboardStyleSheet.td} data-label="Name">{row.name}</td>
                                <td style={DashboardStyleSheet.td} data-label="Country">{row.country}</td>
                                <td style={DashboardStyleSheet.td} data-label="Phone">{row.phone}</td>
                                <td style={DashboardStyleSheet.td} data-label="Email">{row.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div  style={DashboardStyleSheet.pagination}>
            <div
                className="pagination-button"
                style={{
                    ...DashboardStyleSheet.arrow,
                    ...(currentPage === 1 ? DashboardStyleSheet.disabled : {}),
                }}
                onClick={() => currentPage > 1 && handlePageClick(1)}
            >
                First
            </div>
            <div
                className="pagination-button"
                style={{
                    ...DashboardStyleSheet.arrow,
                    ...(currentPage === 1 ? DashboardStyleSheet.disabled : {}),
                }}
                onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
            >
                Previous
            </div>
            <div
                className="pagination-button"
                style={{
                    ...DashboardStyleSheet.page,
                    ...DashboardStyleSheet.pageActive,
                }}
            >
                {currentPage}
            </div>
            <div
                className="pagination-button"
                style={{
                    ...DashboardStyleSheet.arrow,
                    ...(currentPage === totalPages ? DashboardStyleSheet.disabled : {}),
                }}
                onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
            >
                Next
            </div>
            <div
                className="pagination-button"
                style={{
                    ...DashboardStyleSheet.arrow,
                    ...(currentPage === totalPages ? DashboardStyleSheet.disabled : {}),
                }}
                onClick={() => currentPage < totalPages && handlePageClick(totalPages)}
            >
                Last
            </div>
        </div>
    </div>
    );
}

export default AdminTableSheet;