import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";

type BlogData = {
  id: number;
  img: string;
  title: string;
  date: string;
  tags?: string[];  // tags는 배열일 수도 있고 아닐 수도 있음
};

const RankTag = () => {
  const [filterOption, setFilterOption] = useState("#전체");
  const [filteredItems, setFilteredItems] = useState<BlogData[]>([]);

  useEffect(() => {
    setFilteredItems(
      blogsData.filter((elm) => elm.tags?.includes(filterOption)),
    );
  }, [filterOption]);

  const filterOptions = [
    { label: "#전체", value: "#전체" },
    { label: "#서울", value: "#서울" },
    { label: "#부산", value: "#부산" },
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
    
  ];

  
  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
          {filterOptions.map((option) => (
            <div className="col-auto" key={option.value}>
            <button
              className={`tabs__button text-14 fw-500 js-tabs-button`}
              onClick={() => setFilterOption(option.value)}
              style={{
                width: "50px",  // 버튼 너비
                height: "50px", // 버튼 높이
                padding: "0",   // 패딩 없애기
                fontSize: "16px",
                borderRadius: "50%", // 원형 버튼 만들기
                border: "1px solid #ddd",
                background: "#f8f8f8",
                cursor: "pointer",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
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

export default RankTag;
