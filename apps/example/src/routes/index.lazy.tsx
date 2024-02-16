import { usePageTitle } from '@/lib/hooks';
import { HelloWorld } from '@smartprep-fe/ui';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  usePageTitle('Home');

  return (
    <>
      <h1>Welcome</h1>
      <HelloWorld />
    </>
  );
}
