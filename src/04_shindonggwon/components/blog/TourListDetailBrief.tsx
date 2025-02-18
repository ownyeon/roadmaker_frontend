import "../../styles/tourListDetailBrief.scss";

interface TourListDetailBriefProps {
  phone: string;
  address: string;
  holiday: string;
  entranceFee: string;
  website: string;
  hours: string;
  parking: string;
}

const TourListDetailBrief = ({
  phone,
  address,
  holiday,
  entranceFee,
  website,
  hours,
  parking,
}: TourListDetailBriefProps) => {
  return (
    <div className="detailInfoContainer">
      <div className="leftSection">
        <p><strong>▶ 문의 및 안내 :</strong> {phone}</p>
        <p><strong>▶ 주소 :</strong> {address}</p>
        <p><strong>▶ 휴일 :</strong> {holiday}</p>
        <p><strong>▶ 입장료 :</strong> {entranceFee}</p>
      </div>
      <div className="rightSection">
        <p><strong>▶ 홈페이지 :</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
        <p><strong>▶ 이용시간 :</strong> {hours}</p>
        <p><strong>▶ 주차 :</strong> {parking}</p>
      </div>
    </div>
  );
};

export default TourListDetailBrief;
