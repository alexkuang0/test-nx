import { HelloWorld } from '@smartprep-fe/ui';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: () => (
    <>
      <h1>Welcome</h1>
      <HelloWorld />
    </>
  ),
});
