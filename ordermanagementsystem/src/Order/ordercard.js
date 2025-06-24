import { useState, useEffect, useRef } from "react";
import Button from "../Reusable/Const/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownDoubleIcon,
  ArrowUpDoubleIcon,
} from "@hugeicons/core-free-icons";
import '../Reusable/StyleSheet/style.css';

const styles = {
  parentContainer: {
    // width: "100%",
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

    timerText: {
    fontSize: "14px",
    padding: '0 5px',
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "7vh",
    borderRadius: "17px",
    border: "1px dashed red",
    backgroundColor: "#fff0f0",
    flex: '1',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    boxSizing: 'border-box'
  },
};

export default function Ordercards({ data }) {
  const [Expanded, setExpanded] = useState(false);
  const [decision, setDecision] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180);
  const [showTimerInsteadOfReject, setShowTimerInsteadOfReject] = useState(false);

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const timerSwapRef = useRef(null);

  useEffect(() => {
    // Countdown timer (1 sec)
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Final auto-reject after 3 minutes
    timeoutRef.current = setTimeout(() => {
      handleReject();
    }, 180000);

    // Every 5 seconds, show timer instead of button for 1 second
    timerSwapRef.current = setInterval(() => {
      setShowTimerInsteadOfReject(true);
      setTimeout(() => setShowTimerInsteadOfReject(false), 1000);
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
      clearInterval(timerSwapRef.current);
    };
  }, []);

  const handleAccept = () => {
    setDecision("accept");
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    clearInterval(timerSwapRef.current);
  };

  const handleReject = () => {
    setDecision("reject");
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    clearInterval(timerSwapRef.current);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }; 

  return (
    <>
      <div
        className={`order-card-container ${Expanded ? "expanded" : "collapsed"}`}
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
              onClick={handleAccept}
            >
              Accept
            </Button>
            {decision ? (
              <Button
                flex={1}
                fontSize={"medium"}
                fontWeight={"bold"}
                borderRadius={"17px"}
                height={"7vh"}
                backgroundColor={"red"}
                disabled
              >
                Reject
              </Button>
            ) : showTimerInsteadOfReject ? (
              <div style={styles.timerText}> Auto Reject in {formatTime(timeLeft)}</div>
            ) : (
              <Button
                flex={1}
                fontSize={"medium"}
                fontWeight={"bold"}
                borderRadius={"17px"}
                height={"7vh"}
                backgroundColor={"red"}
                onClick={handleReject}
              >
                Reject
              </Button>
            )}
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
                      className="arrowup"
                    />
                  ) : (
                    <HugeiconsIcon
                      icon={ArrowDownDoubleIcon}
                      size={16}
                      color="#000000"
                      strokeWidth={2}
                      className="arrowdown"
                    />
                  )}
                </span>
              </button>
            </div>
      </div>
    </>
  );
}
