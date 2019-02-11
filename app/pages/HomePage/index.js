import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import CarouselImage from './CarouselImage';
import messages from './messages';

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          src: 'http://placehold.it/1900x1080',
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Slide 1 Header',
        },
        {
          src: 'http://placehold.it/1900x1080',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
        },
        {
          src: 'http://placehold.it/1900x1080',
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header',
        },
      ],
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;

    this.setState(previousState => {
      if (previousState.activeIndex === previousState.carouselItems.length - 1)
        return { activeIndex: 0 };

      return { activeIndex: previousState.activeIndex + 1 };
    });
  }

  previous() {
    if (this.animating) return;

    this.setState(previousState => {
      if (previousState.activeIndex === 0)
        return { activeIndex: previousState.carouselItems.length - 1 };

      return { activeIndex: previousState.activeIndex - 1 };
    });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { intl } = this.props;

    const slides = this.state.carouselItems.map(item => (
      <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
        <CarouselImage src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    ));

    return (
      <div className="home">
        <Helmet>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta name="description" content={intl.formatMessage(messages.description)} />
        </Helmet>

        <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators
            items={this.state.carouselItems}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>

        <p>
          <FormattedMessage {...messages.header} />
        </p>
      </div>
    );
  }
}

HomePage.propTypes = {
  intl: PropTypes.object,
};

const withConnect = connect();

export default compose(
  withConnect,
  injectIntl,
)(HomePage);
