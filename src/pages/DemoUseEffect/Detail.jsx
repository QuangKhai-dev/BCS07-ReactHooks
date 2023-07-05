import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  // useNavigate giúp chuyển hướng ng dùng
  const navigate = useNavigate();

  // lấy những id bằng cách dùng useParams
  console.log(params.id);

  const getProductDetail = async () => {
    const res = await axios({
      method: 'GET',
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    });
    console.log(res);
    setProduct(res.data.content);
  };

  useEffect(() => {
    getProductDetail();
  }, [params.id]);

  // demo về component will unmount
  useEffect(() => {
    return () => {
      // nơi xử lí khi dùng component will unmount
      console.log('Tôi đi khỏi trang detail');
    };
  }, []);

  return (
    <div className="container">
      <h3>{product.name}</h3>
      <img src={product.image} alt="" />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <div className="row mt-3">
        {product.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <NavLink className="btn btn-dark" to={`/shoes/${item.id}`}>
                Xem Chi Tiết
              </NavLink>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          navigate('/useeffect');
        }}
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default Detail;
