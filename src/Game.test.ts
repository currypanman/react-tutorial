import { Game, calculateWinner } from './Game';

it('calculates winner', () => {
  expect(
    calculateWinner(['O', '', 'X', '', 'O', '', 'X', '', 'O'])).toEqual('O');
  expect(
    calculateWinner(['X', 'X', 'X', '', '', '', 'O', '', 'O'])).toEqual('X');
  expect(
    calculateWinner(['O', '', 'X', 'X', '', 'O', 'X', '', 'O'])).toEqual(null);
});
