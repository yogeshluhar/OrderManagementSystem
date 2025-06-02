import React, { useEffect, useState } from "react";
import axios from "axios";

export const ConstConsumer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.error("Error:", err));
    }, []);

    const CardStyle = {
        cardContainer: {
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            padding: "40px 20px",
            justifyContent: "center",
            backgroundColor: "#f0f2f5",
        },

        card: {
            width: "320px",
            borderRadius: "20px",
            background: "#ffffff",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            overflow: "hidden",
        },

        cardHeader: {
            height: "200px",
            backgroundColor: "#eee",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        cardImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
        },

        cardBody: {
            padding: "20px",
            textAlign: "center",
        },

        cardTitle: {
            fontSize: "22px",
            fontWeight: "700",
            margin: "10px 0",
            color: "#333",
        },

        cardSubtitle: {
            fontSize: "16px",
            fontWeight: "500",
            color: "#777",
            marginBottom: "6px",
        },

        cardText: {
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.5",
        },

        cardBtn: {
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#0066ff",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            cursor: "pointer",
            transition: "background 0.3s ease",
        },

        cardBtnHover: {
            backgroundColor: "#004acc",
        },
    };



    return (
        <div style={CardStyle.cardContainer}>
            {users.map((user) => (
                <div style={CardStyle.card} key={user.id}>
                    <div style={CardStyle.cardHeader}>
                        <img
                            src={`https://robohash.org/${user.username}?set=set5`}
                            alt={user.name}
                            style={CardStyle.cardImg}
                        />
                    </div>
                    <div style={CardStyle.cardBody}>
                        <h3 style={CardStyle.cardTitle}>{user.name}</h3>
                        <p style={CardStyle.cardText}>{user.email}</p>
                        <p style={CardStyle.cardText}>{user.phone}</p>
                        <button style={CardStyle.cardBtn}>View Profile</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
