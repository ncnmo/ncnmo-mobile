import { Feedback } from './classes';

describe('Feedback', () => {
  it('should create an instance', () => {
    expect(new Feedback("message", "deviceId","feedbackfor")).toBeTruthy();
  });
});
