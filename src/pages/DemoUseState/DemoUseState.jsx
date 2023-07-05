import React, { useState } from 'react';

const DemoUseState = () => {
  // khi gọi useState, ta sẽ được trả về một mảng có 2 phần tử bên trong đó là state và setState
  // khi có các giá trị mặc định ban đầu cần lưu trữ vào state, ta sẽ truyền vào bên trong cặp ngoặc tròn của useState
  // tên của state do chúng ta tự quy định, nhưng lưu ý giá trị đầu tiên của mảng đại diện cho state, và giá trị thứ 2 đại cho setState
  const [img, setImg] = useState('Khanh Nhỏ');
  const [number, setNumber] = useState(9);
  const [fontSize, setFontSize] = useState(16);
  // có thể tạo nhanh một state bằng câu lệnh useStateSnippet
  return (
    <div className="container p-3">
      <h1>Demo về useState</h1>
      <img src={`https://picsum.photos/seed/${number}/200/200`} alt="" />
      <p className="fs-4">{img}</p>
      <p className="fs-4">{number}</p>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Tăng thêm 1 đơn vị
      </button>
      <h2 className="mt-3">Ví dụ thay đổi font-size</h2>
      <p style={{ fontSize }}>Tôi đang lớn dần</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setFontSize(fontSize + 5);
        }}
      >
        Bấm tui đi
      </button>
    </div>
  );
};

export default DemoUseState;
