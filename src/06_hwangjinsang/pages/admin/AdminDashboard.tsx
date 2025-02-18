import { useEffect } from "react";
import { ChartDetail } from "../../components/admin/dashboard/ChartDetail";
import { MiniChart } from "../../components/admin/dashboard/MiniChart";
import { Notification } from "../../components/admin/dashboard/Notification";
import "../../styles/Admin.scss";
import "../../styles/common.scss";
import { useAdmin } from "../../context/AdminContext";

const AdminDashboard = () => {
  const { addClass, removeClass } = useAdmin();
  useEffect(() => {
    addClass();
    return () => {
      removeClass();
    };
  }, [addClass, removeClass]);
  return (
    <div className="adminDashboard">
      <div className="pageBg" />
      <div className="row">
        <div className="col-12 titleFont text-24 title">• 대시보드</div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row ">
            <div className="col-12 bg-white chartDetail py-20 px-10">
              <ChartDetail />
            </div>
            <div className="col-12 bg-white notification mt-20">
              <Notification />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 subFont right ">
          <MiniChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
