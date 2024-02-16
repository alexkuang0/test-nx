import { cn } from '.';

describe('cn function', () => {
  it('should merge classes', () => {
    expect(cn('foo', 'bar')).toEqual('foo bar');
  });

  it('should merge classes with objects', () => {
    expect(cn({ foo: true, bar: false })).toEqual('foo');
  });

  it('should merge classes with arrays', () => {
    expect(cn([null, 'foo', false, 'bar', undefined])).toEqual('foo bar');
  });

  it('should merge classes with arrays and objects', () => {
    expect(cn(['foo', { bar: true }])).toEqual('foo bar');
  });

  it('should merge tailwind classes', () => {
    expect(cn('text-red-500', 'text-blue-500')).toEqual('text-blue-500');
    expect(cn('text-blue-500', 'text-red-500')).toEqual('text-red-500');
  });
});
