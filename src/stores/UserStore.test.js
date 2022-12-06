import UserStore from './UserStore';

const context = describe;

describe('UserStore', () => {
  let userStore;

  beforeEach(() => {
    userStore = new UserStore();
  });

  context('when login', () => {
    it('set amount', async () => {
      await userStore.login({
        username: '1234',
        password: 'Password123!',
      });

      expect(userStore.amount).toBeTruthy();
    });
  });
});
