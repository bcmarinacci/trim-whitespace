'use strict';

const trim = str => trim.trailing(trim.leading(str));

trim.leading = str => str.replace(/^[ \t]+/gm, '');
trim.trailing = str => str.replace(/[ \t]+$/gm, '');

module.exports = trim;
