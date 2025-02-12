import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";

// 블로그 데이터 타입 정의
type BlogData = {
  id: number;
  img: string;
  title: string;
  date: string;
  tags?: string[]; // tags는 배열일 수도 있고 아닐 수도 있음
};


const Blog1 = () => {
  const [filterOption, setFilterOption] = useState("art_culture");
  const [filteredItems, setFilteredItems] = useState<BlogData[]>([]);

  useEffect(() => {
    setFilteredItems(
      blogsData.filter((elm) => elm.tags?.includes(filterOption)),
    );
  }, [filterOption]);

  const filterOptions = [
    { label: "#전국", value: "#전국" },
    { label: "#서울", value: "#서울" , subOptions: ["#강남", "#강북", "#송파"] },
    { label: "#부산", value: "#부산" , subOptions: ["#해운대", "#수영", "#남구"]},
    { label: "#대구", value: "#대구" },
    { label: "#인천", value: "#인천" },
    { label: "#광주", value: "#광주" },
    { label: "#대전", value: "#대전" },
    { label: "#울산", value: "#울산" },
    { label: "#세종", value: "#세종" },
    { label: "#경기", value: "#경기" },
    { label: "#강원", value: "#강원" },
    { label: "#충북", value: "#충북" },
    { label: "#충남", value: "#충남" },
    { label: "#경북", value: "#경북" },
    { label: "#경남", value: "#경남" },
    { label: "#전북", value: "#전북" },
    { label: "#전남", value: "#전남" },
    { label: "#제주", value: "#제주" }
    // add more options as needed
  ];

  const handleOptionClick = (value: string) => {
    if (activeOption === value) {
      setActiveOption(null); // 이미 선택된 값은 클릭 시 하위 옵션 숨기기
    } else {
      setActiveOption(value); // 새로운 값 클릭 시 하위 옵션 보여주기
    }
    setFilterOption(value);
  };


  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="tabs__controls row x-gap-15 justify-center js-tabs-controls">
          {filterOptions.map((option) => (
            <div className="col-auto" key={option.value}>
              <button
                className={`tabs__button text-14 fw-200 px-10 py-5 rounded-4 bg-light-2 js-tabs-button ${
                  filterOption === option.value ? "is-tab-el-active" : ""
                }`}
                onClick={() => setFilterOption(option.value)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {filteredItems.slice(0, 9).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link
                to={`/blog-details/${item.id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img
                      className="cover w-100 img-fluid"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">
                    {item.date}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}

        <BlogPagination />
      </div>
    </>
  );
};

export default Blog1;
