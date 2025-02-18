import { useEffect } from "react";
import "../../styles/Admin.scss";
import "../../styles/common.scss";
import { useAdmin } from "../../context/AdminContext";
const AdminMember = () => {
  const { addClass, removeClass } = useAdmin();
  useEffect(() => {
    addClass();
    return () => {
      removeClass();
    };
  }, [addClass, removeClass]);
  return (
    <div className="adminMember">
      <div className="pageBg" />
    </div>
  );
};

export default AdminMember;
