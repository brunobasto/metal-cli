'use strict';

var metalToolsBuildGlobalsOptions = require('metal-tools-build-globals/lib/options');
var metalToolsBuildAmdOptions = require('metal-tools-build-amd/lib/options');

module.exports = {
  s: {
      alias: 'src',
      default: metalToolsBuildGlobalsOptions.src,
      describe: 'The path globs to the soy files to be compiled.',
      type: 'array'
  },
  d: {
      alias: 'dest',
      default: ['build'],
      describe: 'The directory where the compiled files will be stored. ' +
        'If multiple formats are given, multiple destinations can also ' +
        'be given, one for each format, in the same order.',
      type: 'array'
  },
  f: {
      alias: 'format',
      default: ['globals'],
      describe: 'The format(s) that the source files will be built to.',
      type: 'array'
  },
  b: {
      alias: 'bundleFileName',
      default: metalToolsBuildGlobalsOptions.bundleFileName,
      describe: 'The name of the final bundle file, for formats ' +
        '(like "globals") that create one.',
      type: 'string'
  },
  g: {
      alias: 'globalName',
      default: metalToolsBuildGlobalsOptions.globalName,
      describe: 'Only used by the "globals" format build. The name of ' +
        'the global variable that will hold exported modules.',
      type: 'string'
  },
  m: {
      alias: 'moduleName',
      default: metalToolsBuildAmdOptions.moduleName,
      describe: 'Only used by the "amd" format build. The name of the ' +
        'project that is being compiled. All built modules will be ' +
        'stored in a folder with this name.',
      type: 'string'
  }
};