import { feature } from "topojson-client";

const topoToGeo = (topoJson, objectKey) =>
  /**
   * Takes topojson data returns geojson.
   *
   * @param topojson: topojson data
   * @param objectKey: the name of the key  in topojson's 'objects' value
   * that holds the geometry information for each feature.
   */
  feature(topoJson, {
    type: "GeometryCollection",
    geometries: topoJson.objects[objectKey].geometries,
  });

export default topoToGeo;
