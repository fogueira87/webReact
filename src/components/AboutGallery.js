//"use client";
import React, { useState } from 'react';
import { ImageGallery } from "react-image-grid-gallery";
import about1 from "../images/img13.jpg"
import about2 from "../images/about2.JPG"
import about3 from "../images/about3.JPG"
import about4 from "../images/about4.jpg"
import about5 from "../images/about5.jpg"
import about6 from "../images/about6.JPG"
import about7 from "../images/about7.jpg"
import about8 from "../images/about8.jpg"
import about9 from "../images/about9.jpg"
import about10 from "../images/about10.jpg"
import about11 from "../images/about11.jpg"
import about12 from "../images/about12.jpg"
import about13 from "../images/about13.jpg"
import about14 from "../images/about14.jpg"
import about15 from "../images/about15.jpg"
import about16 from "../images/about16.jpg"
import about17 from "../images/about17.jpg"
import about18 from "../images/about18.jpg"
import about19 from "../images/about19.jpg"
import about20 from "../images/about20.jpg"
import about21 from "../images/about21.jpg"
import about22 from "../images/about22.jpg"
import about23 from "../images/about23.jpg"
import about24 from "../images/about24.jpg"
import about25 from "../images/about25.jpg"
import about26 from "../images/about26.jpg"
import about27 from "../images/about27.jpg"


const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: about9,
      
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: about2,
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: about3,
    },
    {
        alt: "Image3's alt text",
        caption: "Image4's description",
        src: about4,
      },
      {
        alt: "Image3's alt text",
        caption: "Image5's description",
        src: about5,
      },
      {
        alt: "Image3's alt text",
        caption: "Image6's description",
        src: about6,
      },
      {
        alt: "Image3's alt text",
        caption: "Image7's description",
        src: about7,
      },
      {
        alt: "Image3's alt text",
        caption: "Image8's description",
        src: about8,
      },
      {
        alt: "Image3's alt text",
        caption: "Image9's description",
        src: about1,
      },
      {
        alt: "Image3's alt text",
        caption: "Image10's description",
        src: about10,
      },
      {
        alt: "Image3's alt text",
        caption: "Image11's description",
        src: about11,
      },
      {
        alt: "Image3's alt text",
        caption: "Image12's description",
        src: about12,
      },
      {
        alt: "Image3's alt text",
        caption: "Image13's description",
        src: about13,
      },
      {
        alt: "Image3's alt text",
        caption: "Image14's description",
        src: about14,
      },
      {
        alt: "Image3's alt text",
        caption: "Image15's description",
        src: about15,
      },
      {
        alt: "Image3's alt text",
        caption: "Image16's description",
        src: about16,
      },
      {
        alt: "Image3's alt text",
        caption: "Image17's description",
        src: about17,
      },
      {
        alt: "Image3's alt text",
        caption: "Image18's description",
        src: about18,
      },
      {
        alt: "Image3's alt text",
        caption: "Image19's description",
        src: about19,
      },
      {
        alt: "Image3's alt text",
        caption: "Image20's description",
        src: about20,
      },
      {
        alt: "Image3's alt text",
        caption: "Image21's description",
        src: about21,
      },
      {
        alt: "Image3's alt text",
        caption: "Image22's description",
        src: about22,
      },
      {
        alt: "Image3's alt text",
        caption: "Image23's description",
        src: about23,
      },
      {
        alt: "Image3's alt text",
        caption: "Image24's description",
        src: about24,
      },
      {
        alt: "Image3's alt text",
        caption: "Image25's description",
        src: about25,
      },
      {
        alt: "Image3's alt text",
        caption: "Image26's description",
        src: about26,
      },
      {
        alt: "Image's alt text",
        caption: "Image27's description",
        src: about27,
      },

  ];

  function CustomImageRenderer({ image }) {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <div style={{ width: '100%', position: 'relative' }}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: 'auto',
            filter: loaded ? 'none' : 'blur(10px)',
            transition: 'filter 0.3s ease-out'
          }}
        />
        {/* Optional: you can also place a spinner or skeleton here if desired */}
      </div>
    );
  }


   function AboutGallery() {
    return (
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnWidth={280}
        gapSize={3}
        imageRenderer={CustomImageRenderer} // use the custom renderer
      />
    );
  }

  export default AboutGallery