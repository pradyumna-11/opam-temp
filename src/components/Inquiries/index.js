import { Component } from "react";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import QueryItem from "../QueryItem";

const constInquiriesPageStatus = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Inquiries extends Component {
  state = {
    queriesList: [],
    inquiriesPageStatus: constInquiriesPageStatus.loading,
  };

  componentDidMount() {
    this.getQueriesData();
  }

  getQueriesData = async () => {
    this.setState({ inquiriesPageStatus: constInquiriesPageStatus.loading });
    const options = {
      method: "GET",
    };
    const response = await fetch("http://localhost:3001/submissions/", options);
    if (response.ok === true) {
      const data = await response.json();
      this.setState({
        queriesList: data,
        inquiriesPageStatus: constInquiriesPageStatus.success,
      });
    } else {
      this.setState({ inquiriesPageStatus: constInquiriesPageStatus.failure });
    }
  };

  renderInquiriesPageSuccess = () => {
    const { queriesList } = this.state;
    return (
      <>
        <h1 className="queries-heading">Queries Received</h1>
        <ul className="queries-container">
          {queriesList.map((eachQuery) => (
            <QueryItem key={eachQuery._id} queryItemDetails={eachQuery} />
          ))}
        </ul>
      </>
    );
  };

  renderInquiriesPageFailure = () => (
    <div className="page-failure-container">
      <h1 className="failure-heading">
        We are facing some issue,please retry to get details.
      </h1>
      <button
        className="retry-button"
        type="button"
        onClick={this.getQueriesData}
      >
        Retry
      </button>
    </div>
  );

  renderInquiriesPageLoader = () => (
    <div className="loader-container">
      <ThreeDots type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  );

  renderInquiriesPage = () => {
    const { inquiriesPageStatus } = this.state;
    switch (inquiriesPageStatus) {
      case constInquiriesPageStatus.loading:
        return this.renderInquiriesPageLoader();
      case constInquiriesPageStatus.success:
        return this.renderInquiriesPageSuccess();
      case constInquiriesPageStatus.failure:
        return this.renderInquiriesPageFailure();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="queries-section-container">
        {this.renderInquiriesPage()}
      </div>
    );
  }
}

export default Inquiries;
