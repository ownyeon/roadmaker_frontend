import '../../styles/HeaderSearch.scss';

const HeaderSearch = () => {
  return (
    <div className="single-field relative d-flex items-center xl:d-none mr-20 searchBox">
      <input
        className="border-none h-50"
        type="text"
        required
        placeholder="당신의 꿈을 이룰 여행지, 지금 찾아보세요."
      />
      <button type="submit" className="relative d-flex items-center h-full mr-20">
      <i className="bi bi-search fs-4"></i>
      </button>
    </div>
  );
};

export default HeaderSearch;
