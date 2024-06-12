export default {
  fields: {
    foo: 'varchar',
    bar: {
      type: 'varchar',
      virtual: {
        get() {
          return 'baz';
        },
      },
    },
  },
  key: ['foo'],
};
