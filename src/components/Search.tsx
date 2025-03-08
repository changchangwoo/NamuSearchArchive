import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="mb-5 flex justify-center w-full h-12 rounded-3xl bg-white border-1 border-grey px-3">
      <input
        className="flex-grow h-full rounded-l-3xl bg-white text-base text-center font-semibold text-deep-gray outline-none px-3"
        placeholder="검색어 또는 키워드를 입력하세요"
      />
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary cursor-pointer relative top-1 left-2 hover:bg-hover-primary">
        <FaSearch className="text-white" />
      </div>
    </div>
  );
};

export default Search;