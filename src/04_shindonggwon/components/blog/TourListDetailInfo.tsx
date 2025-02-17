interface TourListDetailInfoProps {

  details: string;

}

const TourListDetailInfo = ({

  details,

}: TourListDetailInfoProps) => {
  return (
    <div className="tour-list-detail-info">
      상세설명
      <hr />  
      <div className="tour-info-description">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default TourListDetailInfo;
