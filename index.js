'use strict';

const trim = module.exports = string => trim.trailing(trim.leading(string));
trim.leading = string => string.replace(/^[ \t]+/gm, '');
trim.trailing = string => string.replace(/[ \t]+$/gm, '');
