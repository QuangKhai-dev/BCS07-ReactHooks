// rafce
// rfc
// một vài lí do vì sao sử dụng function component thay cho class component
// vì fc giúp loại bỏ ngữ cảnh con trỏ this, rất khó khi có nhiều phương thức lồng vào, ngữ cảnh con trỏ this sẽ không chính xác
// vì lifecycle của class component rất khó cho người mới tiếp cận

import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div className="bg-dark text-white text-center p-3">Footer</div>
    </div>
  );
};

export default HomeTemplate;
