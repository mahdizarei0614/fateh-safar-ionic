import { ThreadTimePipe } from './thread-time.pipe';

describe('ThreadTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ThreadTimePipe();
    expect(pipe).toBeTruthy();
  });
});
