import { createFileRoute } from '@tanstack/react-router';
import JokeGenerator from '../components/JokeGenerator';

export const Route = createFileRoute('/jokes')({
  component: JokesPage,
});

function JokesPage() {
  return <JokeGenerator />;
}
