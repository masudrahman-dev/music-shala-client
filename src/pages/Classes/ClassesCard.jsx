const ClassesCard = ({
  class_name,
  instructor_email,
  instructor_name,
  class_image,
  price,
  seats,
  userEmail,
  id,
}) => {
  let role;
  // let role = "admin";
  return (
    <div>
      <div
        className={`card ${
          seats == 0 ? "bg-rose-600" : "bg-base-100"
        }  dark:text-white shadow-xl`}
      >
        <figure>
          <img className="w-full" src={class_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{class_name}</h2>

          <p>Instructor Name : {instructor_name}</p>
          <p>Email : {instructor_email}</p>
          <p>Available seats : {seats}</p>
          <p>Price : $ {price}</p>
          <div className="card-actions justify-end">
            {role === "admin" || role == "instructor" ? (
              <button disabled className="btn btn-primary">
                Select
              </button>
            ) : (
              <button className="btn btn-primary">Select</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
