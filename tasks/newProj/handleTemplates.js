/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const { exec } = require("child_process");
const { src, dest } = require("gulp");
const replace = require("gulp-replace");
const del = require("del");
const _ = require("lodash");

const replacer = async (path, text) => {
  console.log(`Removing ${text} in ${path}`);
  return new Promise((resolve, reject) => {
    src(path, { base: "./" })
      .pipe(replace(text, ""))
      .pipe(dest("./"))
      .on("end", resolve);
  });
};

const moduleInstaller = (selectedMods) => {
  console.log(`Installing modules: ${selectedMods}`);
  return new Promise((resolve, reject) => {
    exec(`npm i ${selectedMods}`, (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      resolve();
    });
  });
};

const handleTemplates = async (projTypeChoices, selectedProj) => {
  // Remove separators from projTypeChoices
  projTypeChoices = projTypeChoices.filter((choice) => choice.name);

  // HANDLE REF FILES
  // All elements not in chosen project type's refFiles array will be removed
  const chosenRefFiles = selectedProj.refFiles;
  const allRefFiles = projTypeChoices.map((item) => item.value.refFiles).flat();
  const delPaths = allRefFiles.filter((item) => !chosenRefFiles.includes(item));

  // HANDLE REF TEXT
  // All objs not in chosen projects refText's array will be used to determine text changes.
  const chosenRefText = selectedProj.refText;
  let allRefText = projTypeChoices.map((item) => item.value.refText).flat();
  allRefText = _.uniqWith(allRefText, _.isEqual);
  const replaceText = _.differenceWith(allRefText, chosenRefText, _.isEqual);

  // delete files
  await del(delPaths);
  console.log(`The following paths have been deleted: ${delPaths}`);

  // replacing text
  console.log("Removing references to deleted components...");
  for (const item of replaceText) {
    await replacer(item.path, item.text);
  }

  // begin installing appropriate modules
  if (selectedProj.modules) {
    const selectedMods = selectedProj.modules.join(" ");
    await moduleInstaller(selectedMods);
  }
};

module.exports = handleTemplates;
