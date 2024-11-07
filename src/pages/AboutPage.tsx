import { Link } from "react-router-dom";

type AboutPageProps = {};

export const AboutPage = (props: AboutPageProps) => {
  return (
    <>
      <p style={{ color: "yellow" }}>About Page</p>
      <Link className="App-link" to="/about/details" rel="noopener noreferrer">
        Go to Details Page
      </Link>
      <Link className="App-link" to="/" rel="noopener noreferrer">
        Go to HOME page
      </Link>
    </>
  );
};
