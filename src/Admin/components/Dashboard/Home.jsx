import "./home.scss";
import Widget from "./Widget";
import Featured from "./Featured";
import Chart from "./Chart";
import OrderTableView from "../Order/OrdersTableView";
import PersonTableView from "../Person/PersonTableView";

const Home = () => {
  return (
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <OrderTableView tableTitle={"ORDERS"}/>
          <PersonTableView tableTitle={"RECENT USERS"}/>
        </div>
    </div>
  );
};

export default Home;
