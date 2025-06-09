import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUp01Icon,
  ArrowDown01Icon,
  CancelCircleIcon,
  DropboxIcon,
  DeliveryBox01Icon,
  Menu02Icon,
  Add01Icon,
  Trolley02Icon,
} from "@hugeicons/core-free-icons";
import "../../Reusable/StyleSheet/constadmin.css";
import { CheckListIcon } from "@hugeicons/core-free-icons/index";
import SwitchBtn from "../../Reusable/Const/switchbtn";

const styles = {
  topBarStyle: {
    display: "flex",
    alignItems: "center",
    padding: "16px 10px",
    background: "rgb(37, 82, 277)",
    color: "#fff",
    gap: "10px",
  },
  menuButtonStyle: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: "clamp(10px, 3vw, 30px)",
  },
  drawerContainer: {
    width: "260px",
    height: "100%",
    backgroundColor: "rgb(37, 82, 277)",
    boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 10px",
  },
  drawerHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    margin: 0,
  },
  closeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  drawerList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  listItemStyle: {
    padding: "14px 10px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.2s",
    marginRight: "20px",
    borderRadius: "0 20px 20px 0px",
  },
  icon: {
    marginRight: "10px",
  },
  // subMenuList: {
  //   listStyle: "none",
  //   padding: "0",
  // },
  // subMenuItem: {
  //   fontSize: "15px",
  //   color: "#fff",
  //   cursor: "pointer",
  //   padding: "14px 24px",
  //   marginRight: "20px",
  //   borderRadius: "0 20px 20px 0px",
  //   // borderBottom: "1px solid #eee",
  // },
  linkStyle: {
    textDecoration: "none",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
};

const IsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showProductSubMenu, setShowProductSubMenu] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);
  // const toggleProductSubMenu = () => setShowProductSubMenu((prev) => !prev);

  return (
    <>
      <div style={styles.topBarStyle}>
        <button onClick={toggleDrawer} style={styles.menuButtonStyle}>
          <HugeiconsIcon
            icon={Menu02Icon}
            size={30}
            color="#fff"
            strokeWidth={2.5}
          />
        </button>
        <h2
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "clamp(20px, 2vw, 30px)",
          }}
        >
          Header
        </h2>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        duration={300}
      >
        <div style={styles.drawerContainer}>
          <div style={styles.drawerHeader}>
            <h2 style={styles.drawerHeading}>Profile</h2>
            <button
              className="listItemStyleHover"
              onClick={toggleDrawer}
              style={styles.closeButton}
              aria-label="Close drawer"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1e88e5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <HugeiconsIcon
                icon={CancelCircleIcon}
                size={25}
                color="#fff"
                strokeWidth={2.5}
              />
            </button>
          </div>

          <hr
            style={{
              border: "none",
              borderBottom: "1px solid #ccc",
              width: "90%",
              margin: "0 10px",
            }}
          />

          <ul style={styles.drawerList}>
            {/* Products with submenu */}
            {/* <li
              className="listItemStyleHover"
              onClick={toggleProductSubMenu}
              style={{
                ...styles.listItemStyle,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={styles.linkStyle}>
                <HugeiconsIcon
                  icon={DeliveryBox01Icon}
                  size={24}
                  color="#fff"
                  strokeWidth={2}
                  style={styles.icon}
                />
                Products
              </span>
              <HugeiconsIcon
                icon={showProductSubMenu ? ArrowUp01Icon : ArrowDown01Icon}
                size={22}
                color="#fff"
                strokeWidth={2}
              />
            </li>

            {showProductSubMenu && (
              <ul style={styles.subMenuList}>
                <li className="listItemStyleHover" style={styles.subMenuItem}>
                  <NavLink to="/products" style={styles.linkStyle}>
                    <HugeiconsIcon
                      icon={DropboxIcon}
                      size={24}
                      color="#fff"
                      strokeWidth={2}
                      style={styles.icon}
                    />
                    All Products
                  </NavLink>
                </li>
                <li className="listItemStyleHover" style={styles.subMenuItem}>
                  <NavLink to="/products/add" style={styles.linkStyle}>
                    <HugeiconsIcon
                      icon={Add01Icon}
                      size={24}
                      color="#fff"
                      strokeWidth={2}
                      style={styles.icon}
                    />{" "}
                    Add Product
                  </NavLink>
                </li>
              </ul>
            )} */}

            <li className="listItemStyleHover" style={styles.listItemStyle}>
              <NavLink to="/product" style={styles.linkStyle}>
                <HugeiconsIcon
                  icon={DeliveryBox01Icon}
                  size={24}
                  color="#fff"
                  strokeWidth={2}
                  style={styles.icon}
                />
                Product
              </NavLink>
            </li>

            <li className="listItemStyleHover" style={styles.listItemStyle}>
              <NavLink to="/orders" style={styles.linkStyle}>
                <HugeiconsIcon
                  icon={Trolley02Icon}
                  size={24}
                  color="#fff"
                  strokeWidth={2}
                  style={styles.icon}
                />
                Orders
              </NavLink>
            </li>

            {/* <li className="listItemStyleHover" style={styles.listItemStyle}>
              <NavLink to="/inventory" style={styles.linkStyle}>
                <HugeiconsIcon
                  icon={CheckListIcon}
                  size={24}
                  color="#fff"
                  strokeWidth={2}
                  style={styles.icon}
                />
                Inventory
              </NavLink>
            </li> */}

            {/* <li className="listItemStyleHover" style={styles.listItemStyle}>
              <NavLink to="/settings" style={styles.linkStyle}>
                Settings
              </NavLink>
            </li> */}
          </ul>
        </div>
      </Drawer>
      {/* <SwitchBtn /> */}
    </>
  );
};

export default IsDrawer;
