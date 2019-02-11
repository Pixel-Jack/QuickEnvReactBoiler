const shell = require('shelljs');

const environment = process.env.ENVIRONMENT;
if (!['prod', 'dev', 'staging'].includes(environment)) {
  throw new Error(
    'ENVIROMENT variable not set to a valid value (prod, dev, staging)',
  );
}

let command = '';
if (environment === 'dev') {
  command = 'npm start';
} else {
  command = 'npm run build';
}

shell.exec(command, { async: true });
