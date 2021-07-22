const cannabis = require('../../util/cannabis');

describe('cannabis', () => {
  it('converts number mojo to cannabis', () => {
    const result = cannabis.mojo_to_cannabis(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to cannabis', () => {
    const result = cannabis.mojo_to_cannabis('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to cannabis string', () => {
    const result = cannabis.mojo_to_cannabis_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to cannabis string', () => {
    const result = cannabis.mojo_to_cannabis_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number cannabis to mojo', () => {
    const result = cannabis.cannabis_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string cannabis to mojo', () => {
    const result = cannabis.cannabis_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = cannabis.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = cannabis.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = cannabis.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = cannabis.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = cannabis.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = cannabis.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
