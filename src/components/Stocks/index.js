import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  const history = useHistory();
  const handleClick = () => {
    window.alert("Sending info to DB!");
    history.push("/");
  };
  const loggedIn = true;
  if (!loggedIn) {
    return <Redirect to="/not-logged-in"></Redirect>;
  }
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
