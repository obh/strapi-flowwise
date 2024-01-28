import delve from 'dlv';
import CustomLink from '../../shared/CustomLink';
import ImageCards from './image-cards';

const Hero = ({ images, header, text, buttons }) => {
  const title = delve(header, 'title');

  return (    
  <div       
      style={{
        backgroundImage: `linear-gradient(
          to bottom right,
          rgba(120,255,255,0.5),
          rgba(255,255,255,0))
        `}}
  >
  <section class="text-gray-600 body-font relative py-10 2xl:h-screen">  
  <div class="container mx-auto flex flex-col items-center">
    <h1 class="title-font text-6xl font-black text-gray-900 text-center">
      {title} 
    </h1>

    <p class="mb-8 px-2 max-w-3xl text-center leading-relaxed">
      {text}
    </p>
    <div class="flex justify-center flex-wrap gap-6">
      {buttons.map((button, index) => (
        <button
          key={`heroButton-${index}`}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <CustomLink {...button.link} />
        </button>
      ))}
    </div>
    <div class="inset-0">
      <ImageCards images={images} /> 
    </div>
    
  </div>
 </section>
</div>
    
    // <section className="text-gray-600 body-font py-40 flex justify-center items-center 2xl:h-screen">
    //   <div className="container flex md:flex-row flex-col items-center">
    //     <div className="mt-4 relative relative-20 lg:mt-0 lg:col-start-1">
    //       <ImageCards images={images} />
    //     </div>

    //     <div className="lg:flex-grow md:w-1/2 my-12 lg:pl-24 md:pl-16 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center">
    //       {title && (
    //         <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900">
    //           {title}
    //         </h1>
    //       )}

    //       {text && <p className="mb-8 px-2 leading-relaxed">{text}</p>}

    //       <div className="block space-y-3 md:flex md:space-y-0 space-x-2">
    //         {buttons &&
    //           buttons.map((button, index) => (
    //             <button
    //               key={`heroButton-${index}`}
    //               className={`inline-block text-${delve(
    //                 button,
    //                 'theme'
    //               )}-text bg-${delve(
    //                 button,
    //                 'theme'
    //               )} border-0 py-2 px-6 focus:outline-none hover:bg-${delve(
    //                 button,
    //                 'theme'
    //               )}-darker rounded-full shadow-md hover:shadow-md text-lg`}
    //             >
    //               <CustomLink {...delve(button, 'link')} />
    //             </button>
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

Hero.defaultProps = {};

export default Hero;
