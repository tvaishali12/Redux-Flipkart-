import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreaseQuantity,
  deleteSelectedCart,
  increaseQuantity,
  increment,
} from "./Addtocartlogic";
import { addInWhishlist } from "./Whishlistlogic";

const Renderproduct = () => {
  const mycount = useSelector((state) => state.count.counter); //  counter
  const mycount1 = useSelector((state) => state.count.addProductsInCart); // add item in cart
  const totalAmounts = useSelector((state) => state.count.totalAmount); // total amount
  // const quantity = useSelector((state) => state.count.quantity); //  quantity
  // const myMsg = useSelector((state) => state.count.myMsg); //  Already added msg

  const dispatch = useDispatch(); // for dispatching actions

  const [Renderproduct, setRenderproduct] = useState([]); // for API
  const [applyred, setApplyRed] = useState([]); // foe svg color

  const [addWhishlist, setaddWhishlist] = useState(true); // forcolo
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setRenderproduct(data);
      });
  }, []);
  const addInWhishlists = (id, image, price, title) => {
    setaddWhishlist(!addWhishlist);
    dispatch(
      addInWhishlist({ id: id, image: image, price: price, title: title })
    );
    if (applyred.includes(id)) {
      setApplyRed(applyred.filter((applyreditem) => applyreditem != id));
    } else {
      setApplyRed([...applyred, id]);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "40px,",
        }}
      >
        <div>
          {Renderproduct.map((item) => {
            return (
              <>
                <div>
                  <div
                    style={{
                      border: "1px solid",
                      padding: "13px",
                      borderRadius: "10px",
                      width: "650px",
                      marginLeft: "25px",
                      background: "azure",
                    }}
                  >
                    <img width={100} src={item.image} />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                      }}
                    >
                      <div>
                        <button
                          style={{
                            background: "darkcyan",
                          }}
                          onClick={() =>
                            dispatch(
                              increment({
                                id: item.id,
                                image: item.image,
                                price: item.price,
                                title: item.title,
                              })
                            )
                          }
                        >
                          Add Cart
                        </button>
                      </div>
                      <div
                        style={{
                          marginTop: "9px",
                        }}
                      >
                        <svg
                          onClick={() =>
                            addInWhishlists(
                              item.id,
                              item.image,
                              item.price,
                              item.title
                              // color/
                            )
                          }
                          height="24"
                          style={
                            applyred.includes(item.id)
                              ? // addWhishlist
                                { backgroundColor: "red" }
                              : { backgroundColor: "white" }
                          }
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </div>
                    </div>
                    {/* <h4>{myMSgs}</h4> */}
                    {mycount1.map((items) => {
                      if (items.id === item.id) {
                        return <h4>{items.myMsg}</h4>;
                      }
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div
          style={{
            marginLeft: "128px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                border: "1px solid",
                width: "fit-content",
                padding: "13px",
                background: "black",
                color: "white",
              }}
            >
              <Link to="whishlist">Show Whishlist</Link>
            </div>
            <div
              style={{
                border: "1px solid",
                width: "fit-content",
                padding: "13px",
                background: "black",
                color: "white",
              }}
            >
              <h4>Add TO Cart : {mycount}</h4>
            </div>
            <div
              style={{
                border: "1px solid",
                width: "fit-content",
                padding: "13px",
                background: "black",
                color: "white",
              }}
            >
              <h4>Total Amount : {totalAmounts}</h4>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              style={{
                background: "black",
                color: "white",
              }}
            >
              Clear Cart
            </button>
          </div>
          {mycount1.map((item) => {
            return (
              <>
                <div
                  style={{
                    border: "1px solid",
                    padding: "13px",
                    background: "blanchedalmond",
                    borderRadius: "10px",
                  }}
                >
                  <h5>Product name: {item.title}</h5>
                  <h5>Price: {item.price}</h5>
                  <img width={60} src={item.image} />

                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity({ price: item.price, id: item.id })
                        )
                      }
                      style={{
                        background: "darkcyan",
                      }}
                    >
                      +
                    </button>
                    <button
                      style={{
                        background: "black",
                        color: "white",
                      }}
                    >
                      {item.quantity}
                    </button>
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity({ price: item.price, id: item.id })
                        )
                      }
                      style={{
                        background: "darkcyan",
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        dispatch(
                          deleteSelectedCart({
                            id: item.id,
                            price: item.price,
                            quantity: item.quantity,
                          })
                        )
                      }
                      style={{
                        background: "darkcyan",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Renderproduct;
