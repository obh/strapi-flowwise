import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const ImageCards = ({ images }) => {
  console.log(images.data[0])
  return (
    <div>
      <img
          className="inset-0 h-full w-full object-cover"
          src={getStrapiMedia(delve(images.data[0], 'attributes.url'))}
          alt={delve(images[0], 'attributes.alternativeText')}
      />
    </div>
    // <div className="relative space-y-4">
    //   <div className="flex items-end justify-center lg:justify-start space-x-4">
    //     {images &&
    //       images.data
    //         .slice(0, 1)
    //         .map((image, index) => (
    //           <img
    //             className="rounded-lg shadow-lg w-32 md:w-56"
    //             key={`heroImage-${index}`}
    //             width="200"
    //             src={getStrapiMedia(delve(image, 'attributes.url'))}
    //             alt={delve(image, 'attributes.alternativeText')}
    //           />
    //         ))}
    //   </div>
    //   <div className="flex items-start justify-center lg:justify-start space-x-4 md:ml-12">
    //     {images &&
    //       images.data
    //         .slice(2, 4)
    //         .map((image, index) => (
    //           <img
    //             className="rounded-lg shadow-lg w-32 md:w-56"
    //             key={`heroImage-${index}`}
    //             width="200"
    //             src={getStrapiMedia(delve(image, 'attributes.url'))}
    //             alt={delve(image, 'attributes.alternativeText')}
    //           />
    //         ))}
    //   </div>
    // </div>
  );
};

ImageCards.defaultProps = {};

export default ImageCards;
