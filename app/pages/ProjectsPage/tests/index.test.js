import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import ProjectsPage from '..';
import messages from '../messages';

describe('<ProjectsPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<ProjectsPage />);
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });
});
