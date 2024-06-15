import "./index.css";

const QueryItem = (props) => {
  const { queryItemDetails } = props;
  const { name, email, phone, website, message } = queryItemDetails;
  return (
    <li className="query-item">
      <button type="button" className="query-connected-button">
        Mark as connected
      </button>
      <p className="query-data">Name : {name}</p>
      <p className="query-data">Email : {email}</p>
      <p className="query-data">Phone : {phone}</p>
      <p className="query-data">Website : {website}</p>
      <p className="query-data">Message : {message}</p>
    </li>
  );
};

export default QueryItem;
