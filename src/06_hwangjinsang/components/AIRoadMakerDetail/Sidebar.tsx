import { useState } from "react";
import Schedule from "./Schedule";
import Summary from "./Summary";

const Sidebar = () => {
  const [componentName, setComponentName] = useState<string>("Summary");
  const components: Record<string, React.FC> = {
    Summary,
    Schedule,
  };
  const childClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.closest(".menu")) {
      const tags = Array.from(
        target.closest(".menuRow")!.children
      ) as HTMLElement[];
      tags.forEach((tag: HTMLElement) => {
        if (tag) {
          tag.classList.remove("active");
        }
      });
      const menu = (target.closest(".menu") as HTMLElement);
      menu.classList.add("active");
      const contentText = menu?.textContent?.trim();
      setComponentName(contentText === "여행요약" ? "Summary" : "Schedule")
    }
  };

  const SelectedComponent = components[componentName] || Summary;
  return (
    <div className="sidebar">
      <div className="row text-center menuRow" onClick={childClickHandle}>
        <div className="col-6 subFont menu active">여행요약</div>
        <div className="col-6 subFont menu">일정 상세보기</div>
      </div>
      <SelectedComponent />
    </div>
  );
};

export default Sidebar;
