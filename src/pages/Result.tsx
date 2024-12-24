import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


interface Result {
  shortUrl: string;
}

const Result: React.FC<Result> = ({ shortUrl }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = () => {
    setIsRedirecting(true);
    // Redirect to the short URL
    window.location.href = shortUrl;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
        alert('Copied to clipboard');
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Your Shortened URL</CardTitle>
        <CardDescription>Click the link or use the copy button to share your shortened URL</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Input
            value={shortUrl}
            readOnly
            className="flex-grow"
          />
          <Button onClick={copyToClipboard}>
            Copy
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleClick} 
          disabled={isRedirecting}
          className="w-full"
        >
          {isRedirecting ? 'Redirecting...' : 'Visit Shortened URL'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Result;

