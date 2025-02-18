import { useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import "../../styles/Admin.scss";
import "../../styles/common.scss";
const AdminCourse = () => {
      const { addClass, removeClass } = useAdmin();
      useEffect(() => {
        addClass();
        return () => {
          removeClass();
        };
      }, [addClass, removeClass]);
    return <div className="adminCourse">
      <div className="pageBg" />
  </div>;
};

export default AdminCourse;
