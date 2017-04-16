/* eslint-disable prefer-arrow-callback */
'use strict';

const trim = require('../');

describe('trimWhitespace', function () {
  it('should remove leading and trailing spaces and tabs', function () {
    expect(trim('  Anakin Skywalker  \n  Padme Amidala  ')).toEqual('Anakin Skywalker\nPadme Amidala');
    expect(trim('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t')).toEqual('Anakin Skywalker\nPadme Amidala');
    expect(trim(' \tAnakin Skywalker \t\n\t Padme Amidala\t ')).toEqual('Anakin Skywalker\nPadme Amidala');
    expect(trim('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n')).toEqual('\nAnakin Skywalker\nPadme Amidala\n');
  });

  it('should remove leading spaces and tabs', function () {
    expect(trim.leading('  Anakin Skywalker  \n  Padme Amidala  ')).toEqual('Anakin Skywalker  \nPadme Amidala  ');
    expect(trim.leading('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t')).toEqual('Anakin Skywalker\t\t\nPadme Amidala\t\t');
    expect(trim.leading(' \tAnakin Skywalker \t\n\t Padme Amidala\t ')).toEqual('Anakin Skywalker \t\nPadme Amidala\t ');
    expect(trim.leading('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n')).toEqual('\nAnakin Skywalker \t\nPadme Amidala\t \n');
  });

  it('should remove trailing spaces and tabs', function () {
    expect(trim.trailing('  Anakin Skywalker  \n  Padme Amidala  ')).toEqual('  Anakin Skywalker\n  Padme Amidala');
    expect(trim.trailing('\t\tAnakin Skywalker\t\t\n\t\tPadme Amidala\t\t')).toEqual('\t\tAnakin Skywalker\n\t\tPadme Amidala');
    expect(trim.trailing(' \tAnakin Skywalker \t\n\t Padme Amidala\t ')).toEqual(' \tAnakin Skywalker\n\t Padme Amidala');
    expect(trim.trailing('\n \tAnakin Skywalker \t\n\t Padme Amidala\t \n')).toEqual('\n \tAnakin Skywalker\n\t Padme Amidala\n');
  });
});
