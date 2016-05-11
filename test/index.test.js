'use strict';

const test = require('tape');
const trim = require('../');

test('remove leading and trailing spaces and tabs', t => {
  t.plan(4);
  t.equal(trim('  Anakin Skywalker  \n  Padme Amidala  '), 'Anakin Skywalker\nPadme Amidala');
  t.equal(trim('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t'), 'Anakin Skywalker\nPadme Amidala');
  t.equal(trim(' \tAnakin Skywalker \t\n\t Padme Amidala\t '), 'Anakin Skywalker\nPadme Amidala');
  t.equal(trim('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n'), '\nAnakin Skywalker\nPadme Amidala\n');
});

test('remove leading spaces and tabs', t => {
  t.plan(4);
  t.equal(trim.leading('  Anakin Skywalker  \n  Padme Amidala  '), 'Anakin Skywalker  \nPadme Amidala  ');
  t.equal(trim.leading('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t'), 'Anakin Skywalker\t\t\nPadme Amidala\t\t');
  t.equal(trim.leading(' \tAnakin Skywalker \t\n\t Padme Amidala\t '), 'Anakin Skywalker \t\nPadme Amidala\t ');
  t.equal(trim.leading('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n'), '\nAnakin Skywalker \t\nPadme Amidala\t \n');
});

test('remove trailing spaces and tabs', t => {
  t.plan(4);
  t.equal(trim.trailing('  Anakin Skywalker  \n  Padme Amidala  '), '  Anakin Skywalker\n  Padme Amidala');
  t.equal(trim.trailing('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t'), '\t\tAnakin Skywalker\n\t\tPadme Amidala');
  t.equal(trim.trailing(' \tAnakin Skywalker \t\n\t Padme Amidala\t '), ' \tAnakin Skywalker\n\t Padme Amidala');
  t.equal(trim.trailing('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n'), '\n \tAnakin Skywalker\n\t Padme Amidala\n');
});
