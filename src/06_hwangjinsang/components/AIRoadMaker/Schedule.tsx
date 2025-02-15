import TravelList from "./TravelList";

const Schedule = () => {
  const childClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.closest(".day")) {
      const tags = Array.from(
        target.closest(".daySelector")!.children
      ) as HTMLElement[];
      tags.forEach((tag: HTMLElement) => {
        if (tag) {
          tag.classList.remove("titleFont");
        }
      });
      const menu = target.closest(".day") as HTMLElement;
      menu.classList.add("titleFont");
    }
  };
  return (
    <>
    
      <div className="row subFont mt-20">
        <div className="col-12 d-flex justify-between mb-10">
          <div className="daySelector" onClick={childClickHandle}>
            <span className="mr-10 pointer day titleFont">Day 1</span>
            <span className="mr-10 pointer day">Day 2</span>
            <span className="mr-10 pointer day">Day 3</span>
          </div>
        </div>
        <hr />
        <TravelList />
      </div>
    </>
  );
};

export default Schedule;
