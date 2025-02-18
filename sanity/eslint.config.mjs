import studio from '@sanity/eslint-config-studio'

export default [
  ...studio,
  {
    files: ['scripts/**/*.js'],
    env: {
      node: true,
    },
    rules: {},
  },
]
