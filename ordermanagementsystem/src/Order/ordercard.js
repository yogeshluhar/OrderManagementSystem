import { useState } from "react";
import Button from "../Reusable/Const/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownDoubleIcon,
  ArrowUpDoubleIcon,
} from "@hugeicons/core-free-icons";

const styles = {
  parentContainer: {
    width: "100%",
    height: "30vh",
    backgroundColor: "#d9d9d9",
    borderRadius: "27px",
  },

  whitePill: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: "27px",
    padding: "13px",
  },

  orderType: {
    backgroundColor: "rgb(37, 82, 255)",
    borderRadius: "10px",
    width: "fit-content",
    padding: "5px",
    marginBottom: "5px",
    fontSize: "12px",
    color: "white",
  },

  orderDetails: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "22px",
    fontWeight: "700",
  },

  expandButton: {
    display: "flex",
    justifyContent: "center",
  },

  customerInfo: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "600",
    fontSize: '14px',
    textAlign: 'left',
    padding: "13px",
  },

  orderItemsList: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 19px",
    fontSize: "15px",
    marginBottom: "8px",
  },

  btnContainer: {
    display: "flex",

    gap: "16px",
  },

  btnclick: {
    border: "0",
    backgroundColor: "transparent",
    marginTop: "1px",
  },
};

export default function Ordercards({ data }) {
  const [Expanded, setExpanded] = useState(true);

  return (
    <>
      <div
        style={{
          ...styles.parentContainer,
          height: Expanded ? "50vh" : "30vh",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div style={styles.whitePill}>
          <div style={styles.orderType}>Takeaway</div>
          <div style={styles.orderDetails}>
            <span style={styles.orderList}>Order list</span>
            <span style={styles.totalAmt}>Total : 5</span>
          </div>
          <div style={styles.orderItems}>
            {/* {data.item.map((item, index) => ( */}
            <div style={styles.orderItemsList}>
              <span>samosa</span>
              <span>pcs: 2</span>
            </div>
            {/* ))} */}
          </div>

          <div style={styles.btnContainer}>
            <Button
              flex={1}
              fontSize={"medium"}
              fontWeight={"bold"}
              borderRadius={"17px"}
              height={"7vh"}
              backgroundColor={" #2dff2d"}
            >
              Accept
            </Button>
            <Button
              flex={1}
              fontSize={"medium"}
              fontWeight={"bold"}
              borderRadius={"17px"}
              height={"7vh"}
              backgroundColor={"red"}
            >
              Reject
            </Button>
          </div>
        </div>

        <div
          style={{
            overflow: "hidden",
            transition: "max-height 0.2s ease-in-out",
            maxHeight: Expanded ? "200px" : "0px",
          }}
        >
          <div style={styles.customerInfo}>
            <div>Name : Anna</div>
            <div>Number : 900XXX09</div>
            <div>Address : fjnfjonfjnfonfknbfnnnbnfbninithbb</div>
          </div>
        </div>
            <div style={styles.expandButton}>
              <button
                style={styles.btnclick}
                onClick={() => setExpanded(!Expanded)}
              >
                <span className="text-blue-600 text-sm">
                  {Expanded ? (
                    <HugeiconsIcon
                      icon={ArrowUpDoubleIcon}
                      size={16}
                      color="#000000"
                      strokeWidth={2}
                    />
                  ) : (
                    <HugeiconsIcon
                      icon={ArrowDownDoubleIcon}
                      size={16}
                      color="#000000"
                      strokeWidth={2}
                    />
                  )}
                </span>
              </button>
            </div>
      </div>
    </>
  );
}
