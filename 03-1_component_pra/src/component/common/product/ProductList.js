import "../product/productList.css";
import { useState } from "react";
const ProductList = () => {
  const [productList, setProductList] = useState([
    {
      productNo: 1,
      procutName: "추석선물세트1",
      productPrice: "39,000",
      productImg: "/image/product1.jpg",
      isLike: true,
      star: 1,
    },
    {
      productNo: 2,
      procutName: "추석선물세트2",
      productPrice: "38,900",
      productImg: "/image/product2.jpg",
      isLike: false,
      star: 4,
    },
    {
      productNo: 3,
      procutName: "추석선물세트3",
      productPrice: "59,000",
      productImg: "/image/product3.jpg",
      isLike: false,
      star: 4,
    },
    {
      productNo: 4,
      procutName: "추석선물세트4",
      productPrice: "139,000",
      productImg: "/image/product4.jpg",
      isLike: true,
      star: 4,
    },
    {
      productNo: 5,
      procutName: "추석선물세트5",
      productPrice: "169,000",
      productImg: "/image/product5.jpg",
      isLike: false,
      star: 5,
    },
    {
      productNo: 6,
      procutName: "추석선물세트6",
      productPrice: "38,900",
      productImg: "/image/product6.jpg",
      isLike: true,
      star: 2,
    },
  ]);
  const addProduct = (obj) => {
    productList.push(obj);
    setProductList([...productList]);
  };
  return (
    <div className="product-content">
      <div className="title">
        <span>상품목록</span>
      </div>
      <div className="product-list">
        {productList.map((product, index) => {
          return (
            <Product
              product={product}
              key={"product" + index}
              productList={productList}
              setProductList={setProductList}
              index={index}
            />
          );
        })}
      </div>
      <RegistProduct addProduct={addProduct} />
    </div>
  );
};
const Product = (props) => {
  const product = props.product;
  const index = props.index;
  const productList = props.productList;
  const setProductList = props.setProductList;
  const productLike = () => {
    const newArr = [...productList];
    newArr[index].isLike = !product.isLike;
    setProductList(newArr);
  };
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.productImg} />
      </div>
      <div className="product-info">
        <div className="product-title">{product.procutName}</div>
        <div className="product-price">
          <span className="price">{product.productPrice}</span>
          <span>원</span>
        </div>
        <div className="star-rate">
          <StarRate star={product.star} />
        </div>
        <div className="like">
          {product.isLike ? (
            <span className="material-icons" onClick={productLike}>
              favorite
            </span>
          ) : (
            <span className="material-icons" onClick={productLike}>
              favorite_border
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
//총 6번 호출이 된다.
const StarRate = (props) => {
  const star = props.star; //map은 내부에 있는 데이터를 붙여준다. star 은 배열이 아님
  const arr = new Array();
  for (let i = 0; i < star; i++) {
    arr.push(
      <span key={"star" + i} className="material-icons star-on">
        grade
      </span>
    );
  }
  return <>{arr}</>;
};

const RegistProduct = (props) => {
  //상품번호, 이름, 가격, 별점, 이미지경로 입력받아서 추가(좋아요는 기본적으로 안눌리는 형태로)
  const [productNo, setProductNo] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [star, setStar] = useState("");
  const [productImg, setProductImg] = useState("");
  const productList = props.productList;
  const setProductList = props.setProductList;
  const addProduct = props.addProduct;
  /*
  const changeProductNo = (e) => {
    setProductNo(e.target.value);
  };
  const changeProductName = (e) => {
    setProductName(e.target.value);
  };
  const changeProductPrice = (e) => {
    setProductPrice(e.target.value);
  };
  const changeStar = (e) => {
    setStar(e.target.value);
  };
  const changeProductImg = (e) => {
    setProductImg(e.target.value);
  };
  */
  const regist = () => {
    const newProduct = {
      productNo: productNo,
      procutName: productName,
      productPrice: productPrice,
      productImg: productImg,
      star: star,
      isLike: false,
    };
    addProduct(newProduct);
    //productList.push(newProduct);
    //setProductList([...productList]);
    setProductNo("");
    setProductName("");
    setProductPrice("");
    setProductImg("");
    setStar("");
  };
  return (
    <div className="regist-wrap">
      <InputDiv
        name="상품번호"
        id="productNo"
        data={productNo}
        setData={setProductNo}
      />
      <InputDiv
        name="상품이름"
        id="productId"
        data={productName}
        setData={setProductName}
      />
      <InputDiv name="별점" id="star" data={star} setData={setStar} />
      <InputDiv
        name="상품가격"
        id="productPrice"
        data={productPrice}
        setData={setProductPrice}
      />
      <InputDiv
        name="이미지경로"
        id="productImg"
        data={productImg}
        setData={setProductImg}
      />
      <button onClick={regist}>상품등록</button>
    </div>
  );
};
const InputDiv = (props) => {
  const name = props.name;
  const id = props.id;
  const data = props.data;
  const setData = props.setData;
  const onChangeValue = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} value={data} onChange={onChangeValue}></input>
    </div>
  );
};
export default ProductList;
