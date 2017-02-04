'use strict';

var assert = require('assert');
var armSchemaDocGenerator = require('../lib/index');

describe('arm-schema-doc-generator', () => {
  it('started', () => {
    var result = armSchemaDocGenerator.isSetup()
    assert(result, 'validating setup');
  });
});
