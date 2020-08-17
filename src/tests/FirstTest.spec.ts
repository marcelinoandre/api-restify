import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Andre'

  expect(user.name).toEqual('Andre')
})
