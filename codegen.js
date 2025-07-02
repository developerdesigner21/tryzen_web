const path = require('path');
const fs = require('fs');
require('dotenv').config();

const documentsPath = 'src/graphql';
const files = fs.readdirSync(documentsPath).filter(file => file.endsWith('.graphql'));

const generates = {};

files.forEach(file => {
  const name = path.parse(file).name;
  generates[`src/generated/${name}.tsx`] = {
    documents: [`${documentsPath}/${file}`],
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-react-apollo'
    ],
    config: {
      withHooks: true,
      withHOC: false,
      withComponent: false
    }
  };
});

module.exports = {
  schema: process.env.REACT_APP_GRAPHQL_URL,
  generates,
};
