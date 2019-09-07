import React from 'react';
import ErrorBoundary from "./components/ErrorBoundary"
import PageLayout from './components/PageLayout'
function App() {
  return (
    <ErrorBoundary>
      <PageLayout/>
    </ErrorBoundary>
    
  );
}

export default App;
