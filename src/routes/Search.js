import React from 'react';

const Search = ({ location }) => {
  return (
    <div>
      {/* 쿼리 파싱하기 */}
      '{new URLSearchParams(location.search).get('keyword')}' 검색
    </div>
  );
};

export default Search;