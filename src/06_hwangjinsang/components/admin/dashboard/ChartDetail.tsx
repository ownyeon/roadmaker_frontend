import ChartMain from "./ChartMain";
import ChartSelect from "./ChartSelect";

export const ChartDetail = () => {
  return (
    <div className="row subFont">
      <div className="col-6 text-20 ">• 방문자수</div>
      <div className="col-6">
        <div className="row text-10 text-end">
          <div className="col-12" style={{padding:"0"}}>• 이번주 방문자 : 354</div>
          <div className="col-12" style={{padding:"0"}}>• 저번주 방문자 : 100</div>
        </div>
      </div>
      <div className="col-12 d-flex justify-end mt-40 ">
        <ChartSelect/>
      </div>
      <div className="col-12 mt-10 chartMain">
        <ChartMain />
      </div>
    </div>
  );
};
