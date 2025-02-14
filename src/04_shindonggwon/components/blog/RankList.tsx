import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogsData from "../../data/tourList";
import BlogPagination from "./BlogPagination";

// Tour 인터페이스 정의 (tourList.ts에서 가져오거나 새로 정의)
interface Tour {
  id: number;
  img: string;
  title: string;
  date: string;
  delayAnimation: string;
  details: string;
  tags: string[]; // 기존 tags 유지
}

const RankList = () => {
  const [filterOption, setFilterOption] = useState<string>("art_culture");
  const [filteredItems, setFilteredItems] = useState<Tour[]>([]);

  useEffect(() => {
    setFilteredItems(
      blogsData.filter((elm) => (elm.tags ?? []).includes(filterOption)) // tags가 undefined일 경우 대비
    );
  }, [filterOption]);

  const filterOptions = [
    { label: "#여행지", value: "#여행지" },
    { label: "#맛집", value: "#맛집" },
    { label: "#숙소", value: "#숙소" },
  ];

  return (
    <div className="tabs -pills-3 pt-30 js-tabs">
      {/* 필터 버튼 */}
      <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
        {filterOptions.map((option) => (
          <div className="col-auto" key={option.value}>
            <button
              className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                filterOption === option.value ? "is-tab-el-active" : ""
              }`}
              onClick={() => setFilterOption(option.value)}
            >
              {option.label}
            </button>
          </div>
        ))}
      </div>

      {/* 여행지 리스트 */}
      <div className="row y-gap-30 pt-30">
        {filteredItems.slice(0, 9).map((item) => (
          <div className="col-lg-4 col-sm-6" key={item.id}>
            <Link to={`/blog-details/${item.id}`} className="blogCard -type-1 d-block">
              <div className="blogCard__image">
                <div className="rounded-8">
                  <img className="cover w-100 img-fluid" src={item.img} alt="image" />
                </div>
              </div>
              <div className="pt-20">
                <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      {/* <BlogPagination /> */}
    </div>
  );
};

export default RankList;
