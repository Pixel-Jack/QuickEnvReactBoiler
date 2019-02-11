/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a page component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (value.length > 0) {
          return componentExists(`${value}Page`)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message: 'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = './page/class.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/tests/index.test.js',
        templateFile: './page/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/messages.js',
        templateFile: './page/messages.js.hbs',
        abortOnFail: true,
      },
    ];

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/actions.js',
        templateFile: './page/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/tests/actions.test.js',
        templateFile: './page/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/selectors.js',
        templateFile: './page/selectors.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/tests/selectors.test.js',
        templateFile: './page/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/reducer.js',
        templateFile: './page/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/tests/reducer.test.js',
        templateFile: './page/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/saga.js',
        templateFile: './page/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/tests/saga.test.js',
        templateFile: './page/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/pages/',
    });

    return actions;
  },
};
