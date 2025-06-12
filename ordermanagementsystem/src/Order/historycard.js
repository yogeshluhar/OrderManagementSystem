const styles = {
  cardContainer: {
    backgroundColor : 'white',
     borderRadius: "27px",
     width: "100%",
    height: "fit-content",
    padding: "15px",
  },

  namnumTypeContainer: {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'start'
  },

  orderType: {
    width : 'fit-content',
    backgroundColor : '#d9e6ff',
    padding : '7px',
    borderRadius : '15px',
    fontSize : '14px',
    height : 'fit-content'
  },

  namenum: {},
  
  address : {},

  bill : {
    margin : '10px 0'
  },

  orderhead : {
    fontWeight : "bold",
    fontSize : '24px',
    marginBottom : '4px'
  },

  orderItemsList : {
    display : 'flex',
    justifyContent : 'space-between'
  },

  totalcontainer : {
    display : 'flex',
    justifyContent : 'space-between',
     fontWeight : "bold",
  }, 

  statusUpdate : {
     display : 'flex',
    justifyContent : 'center',
    color : 'white',
    backgroundColor : '#2552ff',
    fontSize : "x-large",
    borderRadius : '11px'
    
  }

};

export default function HistoryCard(params) {
  return (
    <>
      <div style={styles.cardContainer}>
        <div style={styles.namnumTypeContainer}>
          <div style={styles.namenum}>
            <div>Name : Anna</div>
            <div> Number : 900XX5000</div>
          </div>
          <div style={styles.orderType}>Takeaway</div>
        </div>
        <div style={styles.address}>Address : kdkladkadadas</div>
        <div style={styles.bill}>
            <div style={styles.orderhead}>Order</div>
             <div style={styles.orderItems}>
            {/* {data.item.map((item, index) => ( */}
            <div style={styles.orderItemsList}>
              <span>samosa</span>
              <span>pcs: 2</span>
            </div>
            {/* ))} */}
          </div>
          <hr/>
          <div style={styles.totalcontainer}>
            <span>Total</span>
            <span>500</span>
          </div>
        </div>
        <div style={styles.statusUpdate}>ACCEPTED</div>
      </div>
    </>
  );
}
