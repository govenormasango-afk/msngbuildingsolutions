import { useEffect } from 'react';
import { useJoke } from '../hooks/useJoke';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function JokeGenerator() {
  const { joke, loading, error, fetchJoke } = useJoke();

  useEffect(() => {
    fetchJoke();
  }, []);

  const displayJoke = () => {
    if (!joke) return null;
    if (joke.type === 'single') {
      return <p className="text-lg text-foreground">{joke.joke}</p>;
    }
    return (
      <div className="space-y-4">
        <p className="text-lg text-foreground font-medium">{joke.setup}</p>
        <p className="text-lg text-primary font-semibold">{joke.delivery}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">😂 Joke Generator</h1>
          <p className="text-lg text-muted-foreground">Get a random joke to brighten your day!</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Random Joke</CardTitle>
            {joke && <CardDescription>Category: {joke.category}</CardDescription>}
          </CardHeader>
          <CardContent>
            <div className="min-h-[150px] flex items-center justify-center mb-6">
              {loading ? (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <p className="mt-4 text-muted-foreground">Loading a joke...</p>
                </div>
              ) : error ? (
                <div className="text-center">
                  <p className="text-red-500 font-medium">Oops! {error}</p>
                  <p className="text-muted-foreground mt-2">Please try again</p>
                </div>
              ) : joke ? (
                displayJoke()
              ) : (
                <p className="text-muted-foreground">Click the button to get a joke!</p>
              )}
            </div>

            <Button
              onClick={fetchJoke}
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? 'Loading...' : 'Get Another Joke'}
            </Button>
          </CardContent>
        </Card>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-foreground mb-3">About this feature</h2>
          <p className="text-muted-foreground">
            This joke generator uses the free JokeAPI to fetch random jokes. Each time you click
            "Get Another Joke", a new joke is fetched from the API. No setup required!
          </p>
        </div>
      </div>
    </div>
  );
}
