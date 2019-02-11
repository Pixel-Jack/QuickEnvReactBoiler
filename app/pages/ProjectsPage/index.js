import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ProjectsPage extends React.PureComponent {
  render() {
    return (
      <div className="projects">
        <p>
          <FormattedMessage {...messages.header} />
        </p>
      </div>
    );
  }
}

export default connect()(ProjectsPage);
