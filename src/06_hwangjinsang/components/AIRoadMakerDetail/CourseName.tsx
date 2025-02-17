import { useState } from "react";

const CourseName = ({
  setIsScheduleEdit,
  setIsEditOpen,
}: {
  setIsScheduleEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [courseName, setCourseName] = useState("");
  return (
    <div className="row subFont courseBg">
      <div className="col-12 d-flex justify-between items-center mt-10">
        <i
          className="icon icon-close pointer"
          onClick={() => {
            setIsScheduleEdit(false);
            setIsEditOpen(false);
          }}
        ></i>
        <div
          className="pointer"
          onClick={() => {
            setIsScheduleEdit(false);
            setIsEditOpen(false);
          }}
        >
          저장
        </div>
      </div>
      <div className="row px-20 pb-20">
        <div className="col-12 titleFont text-14 mt-10">코스명</div>
        <div className="col-12 ">
          <input
            className="inpBox rounded-2"
            type="text"
            value={courseName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCourseName(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseName;
