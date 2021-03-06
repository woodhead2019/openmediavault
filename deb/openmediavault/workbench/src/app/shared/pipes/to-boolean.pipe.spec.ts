import { ToBooleanPipe } from '~/app/shared/pipes/to-boolean.pipe';

describe('ToBooleanPipe', () => {
  const pipe = new ToBooleanPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms to true [1/8]', () => {
    expect(pipe.transform(true)).toBe(true);
  });

  it('transforms to true [2/8]', () => {
    expect(pipe.transform(1)).toBe(true);
  });

  it('transforms to true [3/8]', () => {
    expect(pipe.transform('y')).toBe(true);
  });

  it('transforms to true [4/8]', () => {
    expect(pipe.transform('yes')).toBe(true);
  });

  it('transforms to true [5/8]', () => {
    expect(pipe.transform('t')).toBe(true);
  });

  it('transforms to true [6/8]', () => {
    expect(pipe.transform('true')).toBe(true);
  });

  it('transforms to true [7/8]', () => {
    expect(pipe.transform('on')).toBe(true);
  });

  it('transforms to true [8/8]', () => {
    expect(pipe.transform('1')).toBe(true);
  });

  it('transforms to false [1/4]', () => {
    expect(pipe.transform('n')).toBe(false);
  });

  it('transforms to false [2/4]', () => {
    expect(pipe.transform(false)).toBe(false);
  });

  it('transforms to false [3/4]', () => {
    expect(pipe.transform('foo')).toBe(false);
  });

  it('transforms to false [4/4]', () => {
    expect(pipe.transform(4711)).toBe(false);
  });
});
