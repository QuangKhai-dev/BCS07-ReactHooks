import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './style.css';
const DemoUseEffect = () => {
  const [number, setNumber] = useState(1);
  const [products, setProducts] = useState([]);
  // khi sử dụng useEffect, sẽ có 2 tham số cần truyền vào, một function và một array

  // useEffect khi truyền tham số thứ 2 là mảng rỗng sẽ kích hoạt component didmount
  const getAllProduct = async () => {
    const res = await axios({
      method: 'Get',
      url: 'https://shop.cyberlearn.vn/api/Product',
    });
    console.log(res);
    // khi gọi dc dữ liệu sẽ setState lưu lại dữ liệu đó
    setProducts(res.data.content);
  };

  useEffect(() => {
    console.log('Tôi là ComponentDidMount');
    getAllProduct();
  }, []);

  //
  useEffect(() => {
    console.log('Tôi chạy khi number thay đổi');
  }, [number]);

  return (
    <div>
      <p className="fs-3">{number}</p>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Tăng điểm
      </button>

      <div className="container">
        <h2>Cửa hàng giày</h2>
        <div className="row mt-3">
          {products.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <img src={item.image} alt="" />
                <p className="huhu">{item.name}</p>
                <p>{item.price}</p>
                <NavLink className="btn btn-dark" to={`/shoes/${item.id}`}>
                  Xem Chi Tiết
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoUseEffect;
