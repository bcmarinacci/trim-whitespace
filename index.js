'use strict';

const trim = module.exports = function (str) {
  return trim.trailing(trim.leading(str));
};

trim.leading = function (str) {
  return str.replace(/^[ \t]+/gm, '');
};

trim.trailing = function (str) {
  return str.replace(/[ \t]+$/gm, '');
};
