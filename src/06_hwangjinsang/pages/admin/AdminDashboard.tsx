import { useEffect } from "react";
import Sidebar from "../../components/admin/common/Sidebar";
import "../../styles/Admin.scss";
import "../../styles/common.scss";

const AdminDashboard = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#efefef";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className="adminDashboard">
      <Sidebar />
    </div>
  );
};

export default AdminDashboard;
