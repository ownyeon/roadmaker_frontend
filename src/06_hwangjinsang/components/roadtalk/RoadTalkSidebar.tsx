import SideBarList from "./list/SideBarList";

const RoadTalkSidebar = () => {
  return (
    // 추후 데이터베이스에서 가져오기
      <div className="container">
        <SideBarList/>
        <SideBarList/>
        <SideBarList/>
      </div>
  );
};

export default RoadTalkSidebar;
