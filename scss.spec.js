const _ = require('lodash');
const glob = require('glob');
const path = require('path');
const sassTrue = require('sass-true');

describe('Sass', () => {
  const sassTestFiles = glob.sync(
    path.resolve(process.cwd(), './scss/**/*.spec.scss'),
  );

  _.each(sassTestFiles, file => sassTrue.runSass({ file }, describe, it));
});
