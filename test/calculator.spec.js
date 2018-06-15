/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './../src/js/app';

describe('App Component', function () {
  this.timeout(88000);
  this.slow(5000);

  it('should shallow render', () => {
    expect(shallow(<App />).contains(<h3>Mortgage Calculator</h3>)).to.equal(true);
  });
});
