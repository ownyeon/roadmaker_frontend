import { useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import "../../styles/Admin.scss";
import "../../styles/common.scss";
const AdminNewTravel = () => {
  const { addClass, removeClass } = useAdmin();
  useEffect(() => {
    addClass();
    return () => {
      removeClass();
    };
  }, [addClass, removeClass]);
  return (
    <div className="adminNewTravel">
      <div className="pageBg" />
    </div>
  );
};

export default AdminNewTravel;
