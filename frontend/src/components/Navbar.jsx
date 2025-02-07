import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../services/api";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      const response = await logout();
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center flex-1 gap-4 justify-end">
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
