/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { src, dest } = require("gulp");
const replace = require("gulp-replace");
const inquirer = require("inquirer");
const del = require("del");
const projTypeChoices = require("./projTypeChoices");
const handleTemplates = require("./handleTemplates");

const validateProjname = (input) => {
  const regex = /^([a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
  if (regex.test(input)) {
    return true;
  }
  return `Input should be one word that matches the following regex: ${regex}`;
};

const rejectNullInput = (input) => {
  if (!input === "" || !/^\s*$/.test(input)) {
    return true;
  }
  return "Please provide input";
};

const newProj = async (cb) => {
  console.log("Lets start a new Spotlight project!");

  // GET VALUES FROM USER
  const promptVals = await inquirer.prompt([
    {
      name: "projType",
      type: "list",
      choices: projTypeChoices,
      message:
        "What kind of project is this? (Template components will be provided)",
    },
    {
      name: "projName",
      validate: validateProjname,
      message:
        "What is the name of your repo? Eg. vis-chart-nursing-homes-2019",
    },
    {
      name: "projDesc",
      validate: rejectNullInput,
      message:
        "How would you describe the purpose of this project? Eg. 'A chart that shows the number of nursing home deaths per county in 2019'",
    },
    {
      when(response) {
        return response.projType.id !== 0;
      },
      name: "projHeadline",
      validate: rejectNullInput,
      message:
        "What is the headline for this visualization? Eg. 'Nursing Home Deaths 2019'",
    },
    {
      when(response) {
        return response.projType.id !== 0;
      },
      name: "projSubhead",
      validate: rejectNullInput,
      message:
        "What is the subhead for this visualization? Eg. 'At least 40 people died from preventable accidents in Nursing homes in Pennsylvania in 2019.'",
    },
    {
      when(response) {
        return response.projType.id !== 0;
      },
      name: "projByline",
      validate: rejectNullInput,
      default: "Daniel Simmons Ritchie",
      message: "What byline or bylines should be used for this project?",
    },
    {
      when(response) {
        return response.projType.id !== 0;
      },
      name: "projSources",
      validate: rejectNullInput,
      message:
        "What is the source/sources of the data used for your project? Eg. Pa. Department of Health",
    },
    {
      when(response) {
        return response.projType.id !== 0;
      },
      name: "projFootnote",
      default: "",
      message:
        "Do you want to add a footnote? Eg. 'Some residents may have died from multiple causes'. Leave blank if not applicable.",
    },
    {
      name: "cleanReadme",
      type: "confirm",
      message:
        "Do you want to remove 'get started', 'deployment', and 'pym' info from readme?",
    },
    {
      name: "deleteGulp",
      type: "confirm",
      message: "Do you want to delete gulpfile?",
    },
  ]);
  const {
    projType,
    projDesc,
    projName,
    projByline,
    projHeadline,
    projSubhead,
    projFootnote,
    projSources,
    cleanReadme,
    deleteGulp,
  } = promptVals;
  console.log(`Project name: ${projName}`);
  console.log(`Display name: ${projHeadline}`);
  console.log(`Project type: ${projType.id}`);

  // UPDATE PROJECT NAME IN SPECIFIC FILES
  const paths1 = ["./package.json", "./iframe.html", "./readme.md"];
  console.log(`Updating project name in following path: ${paths1}...`);
  await new Promise((resolve, reject) => {
    src(paths1, { base: "./" })
      .pipe(replace("boilerplate-spotlight-react-widget-2", projName))
      .pipe(dest("./"))
      .on("end", resolve);
  });
  console.log(`...updated`);

  // UPDATE README WITH DISLAY TITLE + REMOVE README JUNK
  const paths2 = ["./readme.md", "src/index.html", "src/components/Main.js"];
  console.log(
    `Replacing project title, chatter, and other strings in following path: ${paths2}...`
  );
  await new Promise((resolve, reject) => {
    src(paths2, { base: "./" })
      .pipe(replace("__Boilerplate Spotlight React Widget__", projHeadline))
      .pipe(replace("__byline__", projByline))
      .pipe(replace("__subhead__", projSubhead))
      .pipe(replace("__footnote__", projFootnote))
      .pipe(replace("__sources__", projSources))
      .pipe(
        replace(
          /This is a template for.*and the Bulma CSS framework./m,
          projDesc
        )
      )
      .pipe(dest("./"))
      .on("end", resolve);
  });
  console.log(`...updated`);

  // OPTION: CLEAN README
  if (cleanReadme) {
    const paths3 = ["./readme.md"];
    console.log(`Removing extraneous info from readme...`);
    await new Promise((resolve, reject) => {
      src(paths3, { base: "./" })
        .pipe(replace(/\n### Getting started(.*)```gulp new```\n/gms, ""))
        .pipe(replace(/### Deployment[^]+/, ""))
        .pipe(dest("./"))
        .on("end", resolve);
    });
    console.log(`...updated`);
  }

  // REMOVE AND REPLACE COMPONENTS THAT AREN'T NEEDED
  await handleTemplates(projTypeChoices, projType);

  // OPTION: DELETE GULP
  if (deleteGulp) {
    console.log(`Deleting gulpfile...`);
    const deletedPaths = await del(["./gulpfile.js", "./tasks"]);
    console.log(`deleted: ${deletedPaths}`);
  }

  // FINISH
  console.log("SUCCESS!");
  console.log("Your new project is ready to go");
  cb();
};

exports.newProj = newProj;
