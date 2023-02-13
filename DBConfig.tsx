export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [{ name: 'email', keypath: 'email', options: { unique: false } }],
    },
    {
      store: 'boards',
      storeConfig: { keyPath: 'boardId', autoIncrement: true },
      storeSchema: [{ name: 'boardId', keypath: 'boardId', options: { unique: false } }],
    },
  ],
};
