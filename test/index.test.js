'use strict';

const test = require('tape');
const trim = require('../');

test('trim leading and trailing spaces', t => {
  t.plan(1);
  t.equal(trim('  Anakin Skywalker  \n  Padme Amidala  '), 'Anakin Skywalker\nPadme Amidala');
});

test('trim leading and trailing tabs', t => {
  t.plan(1);
  t.equal(trim('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t'), 'Anakin Skywalker\nPadme Amidala');
});

test('trim leading spaces', t => {
  t.plan(1);
  t.equal(trim.leading('  Anakin Skywalker  \n  Padme Amidala  '), 'Anakin Skywalker  \nPadme Amidala  ');
});

test('trim leading tabs', t => {
  t.plan(1);
  t.equal(trim.leading('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t'), 'Anakin Skywalker\t\t\nPadme Amidala\t\t');
});

test('trim trailing spaces', t => {
  t.plan(1);
  t.equal(trim.trailing('  Anakin Skywalker  \n  Padme Amidala  '), '  Anakin Skywalker\n  Padme Amidala');
});

test('trim trailing tabs', t => {
  t.plan(1);
  t.equal(trim.trailing('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t'), '\t\tAnakin Skywalker\n\t\tPadme Amidala');
});
