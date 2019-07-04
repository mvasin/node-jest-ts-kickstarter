import {hello} from './index';

test('dummy test', () => {
  expect(hello('john')).toBe('hello john')
})