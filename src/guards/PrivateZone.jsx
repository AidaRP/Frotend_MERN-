import { Navigate } from "react-router-dom";

const PrivateZone = ({ children }) => {
  const user = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_credentials")
  );
  return user?.user?.email ? children : <Navigate to="/login" />;
};

export default PrivateZone;
