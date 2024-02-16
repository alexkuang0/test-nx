import { render } from '@testing-library/react';

import { HelloWorld } from '.';

describe('Hello World component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelloWorld />);
    expect(baseElement).toBeTruthy();
  });
});
