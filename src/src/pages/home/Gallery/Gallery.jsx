/* eslint-disable react/prop-types */
import GalleryCard from "./GalleryCard";


const Gallery = ({ products }) => {


  return (
    <div className="container mx-auto  mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">Gallery</h1>
      </div>
      <div
       
        className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-7"
      >
        {products?.map((product) => (
          <GalleryCard key={product._id} product={product}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
