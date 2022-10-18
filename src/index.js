// Core
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import  { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';


// Components
import { App } from './App';

// Instruments
import './theme/main.scss';

// Context provider
import { SelectedTagProvider, SettingsProvider, queryClient } from './lib';

render(
    <QueryClientProvider client = { queryClient }>
        <SettingsProvider>
            <SelectedTagProvider>
                <Router>
                    <App />
                </Router>
            </SelectedTagProvider>
        </SettingsProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
    document.getElementById('root'),

);
