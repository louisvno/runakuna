import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems, children, columns, ids }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, i) => (
      <div id={ids?.[i]} key={item.text} className={"column is-" + columns}>
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h4 className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered">{item.text}</h4>
          {React.Children.toArray(children)[i]}
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  columns: PropTypes.number,
  ids: [],
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
