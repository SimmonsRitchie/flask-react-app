const { newProj } = require("./tasks/newProj");

exports.new = newProj;
exports.default = newProj;

// TODO: Fix refFiles bug: wrong files being deleted
