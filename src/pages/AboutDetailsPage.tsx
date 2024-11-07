import { Link, useNavigate } from "react-router-dom";

type AboutDetailsPageProps = {};

export const AboutDetailsPage = (props: AboutDetailsPageProps) => {
  const navigate = useNavigate();

  return (
    <>
      <p style={{ color: "lime" }}>About Details Page</p>
      <Link
        className="App-link"
        to=".."
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Go to back
      </Link>
      <Link className="App-link" to="/" rel="noopener noreferrer">
        Go to HOME page
      </Link>
    </>
  );
};
