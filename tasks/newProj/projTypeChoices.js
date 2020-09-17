/* eslint-disable import/no-extraneous-dependencies */
const inquirer = require("inquirer");

const topoJsonRefs = [
  {
    path: "src/utils/load.js",
    text: 'import topoToGeo from "./topoToGeo";\n',
  },
  {
    path: "src/utils/load.js",
    text: 'import("~/data/pa-county.json")',
  },
  {
    path: "src/utils/load.js",
    text: ", dummyTopoJson",
  },
  {
    path: "src/utils/load.js",
    text: 'data.geoJson = topoToGeo(dummyTopoJson, "pa-county");',
  },
];

const projTypeChoices = [
  new inquirer.Separator("Chart"),
  {
    name: "horizontal bar chart",
    value: {
      id: 1,
      refFiles: [
        "./src/components/HorBarChart/",
        "./src/styles/components/hor-bar-chart/",
      ],
      refText: [
        {
          path: "./src/styles/styles.scss",
          text: "@import './components/hor-bar-chart/';\n",
        },
      ],
      modules: ["recharts", "d3-scale-chromatic"],
    },
  },
  {
    name: "vertical bar chart",
    value: {
      id: 2,
      refFiles: [
        "./src/components/VertBarChart/",
        "./src/styles/components/vert-bar-chart/",
      ],
      refText: [
        {
          path: "./src/styles/styles.scss",
          text: "@import './components/vert-bar-chart/';\n",
        },
      ],
      modules: ["recharts", "d3-scale-chromatic"],
    },
  },
  {
    name: "cluster bar chart",
    value: {
      id: 3,
      refFiles: [
        "./src/components/ClusterBarChart/",
        "./src/styles/components/cluster-bar-chart/",
      ],
      refText: [
        {
          path: "./src/styles/styles.scss",
          text: "@import './components/cluster-bar-chart/';\n",
        },
      ],
      modules: ["recharts", "d3-scale-chromatic"],
    },
  },
  {
    name: "stacked area chart",
    value: {
      id: 4,
      refFiles: [
        "./src/components/StackedAreaChart/",
        "./src/styles/components/stacked-area-chart/",
      ],
      refText: [
        {
          path: "./src/styles/styles.scss",
          text: "@import './components/stacked-area-chart/';\n",
        },
      ],
      modules: ["recharts", "d3-scale-chromatic"],
    },
  },
  new inquirer.Separator("Map"),
  {
    name: "Pa. leaflet map",
    value: {
      id: 5,
      refFiles: [
        "./src/components/LeafletMap/",
        "./src/styles/components/leaflet-map/",
        "./src/utils/constants.js",
        "./src/utils/topoToGeo.js",
        "./src/data/pa-county.json",
      ],
      refText: [
        {
          path: "./src/styles/styles.scss",
          text: "@import './components/leaflet-map/';\n",
        },
        ...topoJsonRefs,
      ],
      modules: ["leaflet", "react-leaflet"],
    },
  },
  {
    name: "Pa. simple map",
    value: {
      id: 6,
      refFiles: [
        "./src/components/SimpleMap/",
        "./src/styles/components/simple-map/",
        "./src/utils/topoToGeo.js",
        "./src/data/pa-county.json",
      ],
      refText: [
        {
          path: "./src/styles/styles.scss",
          text: "@import './components/simple-map/';\n",
        },
        ...topoJsonRefs,
      ],
      modules: ["react-simple-maps@1.0.0-beta.0", "react-tooltip"],
    },
  },
  new inquirer.Separator(),
  {
    name: "None of the above (blank widget)",
    value: {
      id: 0,
      refFiles: [],
      refText: [],
    },
  },
];

module.exports = projTypeChoices;
