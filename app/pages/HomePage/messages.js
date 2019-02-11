/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.pages.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Build your ideas!',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'YOUR_PROJECT homepage',
  },
});
