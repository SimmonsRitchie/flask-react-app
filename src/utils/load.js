import { csv } from "d3-fetch";
import DUMMY_DATA from "../data/dummy-data.csv";
import topoToGeo from "./topoToGeo";

const loadData = () => {
  /* Fetch and parse files. */
  return Promise.all([csv(DUMMY_DATA), import("~/data/pa-county.json")]).then(
    ([dummyData, dummyTopoJson]) => {
      const data = {};
      data.geoJson = topoToGeo(dummyTopoJson, "pa-county");
      data.dummy = dummyData;
      return data;
    }
  );
};

export default loadData;
