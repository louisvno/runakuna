import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import "@fontsource/cormorant-garamond";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <img
            src={img.url}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              maxHeight: height,
              opacity: "0.8",
              justifySelf: "center",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
              opacity: "0.8"
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
              backgroundColor: "rgb(255,255,255, 0.85)",
              margin: "0 60px 0 60px",
              padding: "20px",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: "black",
                  lineHeight: "1",
                  padding: "0.25em",
                  fontFamily:"Cormorant Garamond, serif",
                  letterSpacing: "0.15rem"
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-4-mobile is-size-4-tablet is-size-3-widescreen"
                style={{
                  color: "black",
                  lineHeight: "1",
                  padding: "0.25rem",
                  paddingBottom: "1rem",
                  marginTop: "0.5rem",
                  fontFamily:"Cormorant Garamond, serif",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
