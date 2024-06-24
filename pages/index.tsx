// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page
    router.replace('/login');
  }, [router]);

  return null; // Optionally, you can add a loading spinner or message here
};

export default Index;
