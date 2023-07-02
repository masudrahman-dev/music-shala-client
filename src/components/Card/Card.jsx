import LazyLoad from "react-lazy-load";
import "../../assets/css/lazyLoad.css";
const Card = ({ item, handleAddToCart, isDisable }) => {
  const {
    seats,
    class_image,
    class_name,
    instructor_name,
    instructor_email,
    instructor_image,
    price,
    role,
  } = item;

  return (
    <>
      <div
        className={`card p-5 ${
          seats == 0 ? "bg-rose-600" : "bg-base-100"
        }  dark:text-white shadow-xl`}
      >
        <figure>
          <LazyLoad threshold={0.95}>
            <img src={class_image} alt="Shoes" className="rounded-lg" />
          </LazyLoad>
        </figure>

        <div className="absolute top-8 right-8 ">
          <p className="badge badge-primary  text-lg hover:bg-fuchsia-500 hover:border-none  uppercase p-4">
            $ {price}
          </p>
        </div>
        <div className="card-body"></div>
        <div className="flex items-baseline gap-5 ">
          <h2 className="card-title">{class_name}</h2>
          <p> seats : {seats}</p>
        </div>
        <div className="flex gap-5 my-5">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={instructor_image} />
            </div>
          </div>
          <div>
            <p>{instructor_name}</p>
            <p> {instructor_email}</p>
          </div>
        </div>

        <div className="card-actions justify-end">
          {role === "admin" || role == "instructor" || seats == "0" ? (
            <button disabled className="btn btn-primary">
              Add to Cart
            </button>
          ) : (
            <button
              disabled={(isDisable === true)}
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
