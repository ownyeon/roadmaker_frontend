import blogsData from "../../data/blogs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BlogItem {
    id: number;
    img: string;
    title: string;
    date: string;
  }
  
  const FavoriteDesinations: React.FC = () => {
    return (
      <div className="dashboard">
        <div className="dashboard__main">
          <div className="dashboard__content">
            <h1 className="text-30 lh-14 fw-600 titleFont" style={{ marginBottom: "10px" }}>
              관심 여행지
            </h1>
            <p className="text-15 text-light-1 subFont">
              내가 좋아요를 누른 여행지를 보여줍니다.
            </p>
  
            <div className="row y-gap-30 pt-30">
              {blogsData.map((item: BlogItem) => (
                <div className="col-lg-4 col-sm-6" key={item.id}>
                  <Link to={`/blog-details/${item.id}`} className="blogCard -type-1 d-block">
                    <div className="blogCard__image">
                      <div className="image-container">
                        <img className="fixed-image" src={item.img} alt="image" />
                      </div>
                    </div>
                    <div className="pt-20">
                      <h4 className="text-dark-1 text-18 fw-500 titleFont">{item.title}</h4>
                      <div className="text-light-1 text-15 lh-14 mt-5 subFont">{item.date}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FavoriteDesinations;