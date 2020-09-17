import React, { createRef } from "react";
import { Map, TileLayer, GeoJSON, Pane } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import PropTypes from "prop-types";
import Icons from "./Icons";

const PA_BOUNDS = [
  [42.505, -80],
  [39, -75],
];
const DARK = "#222222";

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconRadius: 2,
    };
    this.mapRef = createRef();
  }

  componentDidMount() {
    this.map = this.mapRef.current.leafletElement;
    const { geoData } = this.props;
    const geoJsonData = L.geoJSON(geoData);
    this.map.fitBounds(geoJsonData.getBounds());
  }

  handleZoomEnd = () => {
    const zoomLevel = this.map.getZoom();
    let iconRadius;
    if (zoomLevel >= 10) {
      iconRadius = 6;
    } else if (zoomLevel >= 8) {
      iconRadius = 4;
    } else {
      iconRadius = 2;
    }
    this.setState({
      iconRadius,
    });
  };

  geoJSONStylePlain = () => {
    return {
      color: "white",
      weight: 0.6,
      fillOpacity: 0.05,
      fillColor: DARK,
    };
  };

  render() {
    const { geoData, iconData, tooltipSchema } = this.props;
    const { iconRadius } = this.state;
    return (
      <div className="leaflet-map__container-outer">
        <Map
          bounds={PA_BOUNDS}
          className="leaflet-map__container-inner"
          onzoomend={this.handleZoomEnd}
          ref={this.mapRef}
        >
          <TileLayer
            url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png`}
            attribution={
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }
            subdomains="abcd"
            maxZoom={20}
            minZoom={0}
          />
          <Pane
            // Note: We use panes and adjust zIndex so that labels appear above geoJSON but
            // beneath bubbles
            name="labels"
            style={{ zIndex: 450, pointerEvents: "none" }}
          >
            <TileLayer
              url={`https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}${
                L.Browser.retina ? "@2x.png" : ".png"
              }`}
              attribution={
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
              }
              subdomains="abcd"
              maxZoom={20}
              minZoom={0}
            />
          </Pane>
          <GeoJSON
            // NOTE: geoJSON needs a unique key in order for it to update when data changes
            data={geoData}
            style={this.geoJSONStylePlain}
          />
          <Icons iconData={iconData} propertyID="provnum" radius={iconRadius} tooltipSchema={tooltipSchema}/>
        </Map>
      </div>
    );
  }
}

LeafletMap.propTypes = {
  geoData: PropTypes.objectOf(PropTypes.any).isRequired,
  iconData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tooltipSchema: PropTypes.arrayOf(PropTypes.object),
};

export default LeafletMap;
