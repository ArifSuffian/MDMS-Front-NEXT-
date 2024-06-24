import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout'; // Import your layout component

// List of paths where layout should be excluded
const excludedPaths = ['/login', '/signup']; // Add more paths as needed

function MyApp({ Component, pageProps, router }: AppProps) {
  // Check if current path should exclude layout
  const isExcludedPath = excludedPaths.includes(router.pathname);

  // Render layout conditionally
  if (isExcludedPath) {
    return <Component {...pageProps} />;
  }

  // Render layout with component
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
