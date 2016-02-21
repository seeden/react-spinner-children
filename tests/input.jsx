import React from 'react';
import should from 'should';
import Spinner from '../dist';
import { renderJSX } from '../utils/tester';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Spinner', () => {
  it('should be able to create simple instance', () => {
    const node = renderJSX(
      <Spinner loaded={false} >
        <span>loaded</span>
      </Spinner>
    );

    const span = findDOMNode(node).querySelector('span');
    should(span).equal(null);
  });

  it('should be able to create loaded instance', () => {
    const node = renderJSX(
      <Spinner loaded={true} >
        <span>loaded</span>
      </Spinner>
    );

    findDOMNode(node).innerHTML.should.equal('loaded');
  });
});
