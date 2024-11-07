import { Link } from "react-router-dom";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  return (
    <>
      <p style={{ color: "red" }}>Home Page</p>
      <Link className="App-link" to="/about" rel="noopener noreferrer">
        Go to ABOUT page
      </Link>
      <p>
        <i>{process.env.REACT_APP_NODE_ENV}</i>
      </p>
    </>
  );
};
