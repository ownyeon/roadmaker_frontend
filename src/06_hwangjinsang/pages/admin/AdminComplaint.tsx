import { useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import "../../styles/Admin.scss";
import "../../styles/common.scss";
import { TravelComplaint } from "../../components/admin/complaint/TravelComplaint";
import { CommentComplaint } from "../../components/admin/complaint/CommentComplaint";
const AdminComplaint = () => {
  const { addClass, removeClass } = useAdmin();
  useEffect(() => {
    addClass();
    return () => {
      removeClass();
    };
  }, [addClass, removeClass]);
  return (
    <div className="adminComplaint">
      <div className="pageBg" />
      <div className="row">
        <div className="col-12 titleFont text-24 title">• 신고 관리</div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 subFont ">
          <div className="row bg-white left">
            <div className="col-12 d-flex justify-between items-center borderBottom">
              <span className="text-20">여행지 신고 관리</span>
              <div className="text-14">
                <span className="px-10 pointer clickActive">미확인</span>
                <span className="px-10 pointer">처리 완료</span>
              </div>
            </div>
            <TravelComplaint />
            <TravelComplaint />
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 ">
          <div className="row bg-white right">
            <div className="col-12  d-flex justify-between items-center borderBottom">
              <span className="text-20">댓글 신고 관리</span>
              <div className="text-14">
                <span className="px-10 pointer ">미확인</span>
                <span className="px-10 pointer clickActive">처리 완료</span>
              </div>
            </div>
            <CommentComplaint/>
            <CommentComplaint/>
            <CommentComplaint/>
            <CommentComplaint/>
            <CommentComplaint/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComplaint;
