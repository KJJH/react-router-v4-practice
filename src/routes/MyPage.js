import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;  // 로그인 상태 : false

const MyPage = () => {
  return (
    <div>
      {
        // 로그인 상태가 아니라면 로그인페이지로 돌아가기
        !logged && <Redirect to="/login" />
      }
      마이페이지
    </div>
  );
};

export default MyPage;