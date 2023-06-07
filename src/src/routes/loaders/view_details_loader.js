const view_details_loader = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(
    `https://toy-marketplace-server-rose.vercel.app/products/${params.id}`
  );
  const data = await res.json();
  return data;
};

export default view_details_loader;
