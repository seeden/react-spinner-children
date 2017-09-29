import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../src';

describe('Spinner', () => {
  it('should be able to create simple instance', () => {
    const wrapper = mount((
      <Spinner loaded={false} >
        <span>loaded</span>
      </Spinner>
    ));

    // validate video
    expect(wrapper.find('span').length).toBe(0);
  });

  it('should be able to create loaded instance', () => {
    const wrapper = mount((
      <Spinner loaded>
        <span>loaded</span>
      </Spinner>
    ));

    // validate video
    expect(wrapper.find('span').length).toBe(1);
  });
});
