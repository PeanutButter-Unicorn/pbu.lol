    // src/main.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.tsx';
    // You can remove './index.css' if you don't plan to use it alongside Mantine's styles
    import './index.css'; 
    import { MantineProvider } from '@mantine/core';
    import '@mantine/core/styles.css'; // Import Mantine core styles

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </React.StrictMode>,
    );
    