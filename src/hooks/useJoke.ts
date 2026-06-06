import { useState } from 'react';

export interface Joke {
  id: number;
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
  category: string;
}

export function useJoke() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Any?format=json'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { joke, loading, error, fetchJoke };
}
