import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>NotFound</div>
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
};
