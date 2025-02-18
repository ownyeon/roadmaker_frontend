import { useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import "../../styles/Admin.scss";
import "../../styles/common.scss";
const AdminKeyword = () => {
      const { addClass, removeClass } = useAdmin();
      useEffect(() => {
        addClass();
        return () => {
          removeClass();
        };
      }, [addClass, removeClass]);
  return (
    <div className="adminKeyword">
      <div className="pageBg" />
    </div>
  );
};

export default AdminKeyword;
