import { usePageTitle } from '@/lib/hooks';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  usePageTitle('About');

  return <div>Hello /about!</div>;
}
