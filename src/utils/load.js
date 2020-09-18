import { csv } from "d3-fetch";
import DUMMY_DATA from "../data/dummy-data.csv";

const loadData = () => {
  /* Fetch and parse files. */
  return Promise.all([csv(DUMMY_DATA), ]).then(
    ([dummyData]) => {
      const data = {};
      
      data.dummy = dummyData;
      return data;
    }
  );
};

export default loadData;
