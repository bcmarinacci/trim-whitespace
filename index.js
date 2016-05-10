'use strict';

module.exports = str => str.replace(/^[ \t]+|[ \t]+$/gm, '');
module.exports.leading = str => str.replace(/^[ \t]+/gm, '');
module.exports.trailing = str => str.replace(/[ \t]+$/gm, '');
