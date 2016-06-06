'use strict';

const trim = module.exports = str => trim.trailing(trim.leading(str));
trim.leading = str => str.replace(/^[ \t]+/gm, '');
trim.trailing = str => str.replace(/[ \t]+$/gm, '');
