import { usePageTitle } from '@/lib/hooks';
import { HelloWorld } from '@smartprep-fe/ui';
import { cn } from '@smartprep-fe/utils';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  usePageTitle('Home');

  return (
    <>
      <h1
        className={cn(
          'font-bold text-3xl',
          Math.random() > 0.5 ? 'text-red-600' : 'text-blue-600'
        )}
      >
        Welcome
      </h1>
      <HelloWorld />
    </>
  );
}
