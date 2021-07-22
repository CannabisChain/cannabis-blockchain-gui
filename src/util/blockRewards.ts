import Big from 'big.js';

const MOJO_PER_CANSCOIN = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_CANSCOIN.times(2400000).times(7 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(16).times(0);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(8).times(7 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(4).times(7 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(2).times(7 / 8);
  }

  return MOJO_PER_CANSCOIN.times(1).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_CANSCOIN.times(2400000).times(1 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(16).times(1);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(8).times(1 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(4).times(1 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CANSCOIN.times(2).times(1 / 8);
  }

  return MOJO_PER_CANSCOIN.times(1).times(1 / 8);
}
