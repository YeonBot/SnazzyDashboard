// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        tsconfig: './tsconfig.paths.json',
      },
    },
  ],
};
