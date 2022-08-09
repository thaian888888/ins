// import "./Description.scss";
// import { useState, useEffect } from "react";
// import BgIn from "../../Images/1dc085cdb87d.png";
// import In1 from "../../Images/4d62acb667fb.png";
// import In2 from "../../Images/94edb770accf.png";
// import In3 from "../../Images/a4fd825e3d49.png";
// import In4 from "../../Images/fdfe239b7c9f.png";

// const Description = () => {
//   const images = [In1, In2, In3, In4];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (currentIndex === images.length - 1) {
//         setCurrentIndex(0);
//       } else {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }, 2000);

//     console.log(currentIndex);

//     return () => clearInterval(intervalId);
//   }, [images]);

//   return (
//     <div className="Des">
//       <div className="Des__bg">
//         <img src={BgIn} alt="background" />
//       </div>
//       <img src={images[currentIndex]} alt="icon" />
//     </div>
//   );
// };

// export default Description;

import "./Description.scss";
import { useState, useEffect } from "react";
import BgIn from "../../Images/1dc085cdb87d.png";
import In1 from "../../Images/4d62acb667fb.png";
import In2 from "../../Images/94edb770accf.png";
import In3 from "../../Images/a4fd825e3d49.png";
import In4 from "../../Images/fdfe239b7c9f.png";

const Description = () => {
  const images = [In1, In2, In3, In4];
  console.log(images.length);
  
  const [image, setImage] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (image === images.length - 1 ) {
        setImage(0);
     
      } else {
        setImage(image + 1);
        
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [image]);

  return (
    <div className="Des">
      <div className="Des__bg">
        <img src={BgIn} alt="background" />
      </div>
      <img src={images[image]} alt="icon" />
    </div>
  );
};

export default Description;

