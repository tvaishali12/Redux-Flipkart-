import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Addtocartlogic";
import { deleteSelectedproduct } from "./Whishlistlogic";
const Whishlist = () => {
  const myWhishList = useSelector((state) => state.whishlist.whishlistProduct);

  const dispatch = useDispatch(); // for dispatching actions

  return (
    <>
      <div>
        <h3
          style={{
            marginLeft: "152px",
          }}
        >
          Whislist
        </h3>
        {myWhishList.map((items) => {
          return (
            <>
              <div>
                <div
                  style={{
                    border: "1px solid",
                    padding: "13px",
                    background: "blanchedalmond",
                    borderRadius: "10px",
                  }}
                >
                  <img width={60} src={items.image} />
                  <h5>Product name: {items.title}</h5>
                  <h5>Price: {items.price}</h5>

                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <button
                      onClick={() =>
                        dispatch(
                          increment({
                            id: items.id,
                            image: items.image,
                            price: items.price,
                            title: items.title,
                          })
                        )
                      }
                      style={{
                        background: "darkcyan",
                      }}
                    >
                      Add CArt
                    </button>
                    <button
                      onClick={() =>
                        dispatch(deleteSelectedproduct({ id: items.id }))
                      }
                      style={{
                        background: "darkcyan",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Whishlist;
