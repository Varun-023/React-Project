import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';

test('renders app without crashing', () => {
    try {
        render(
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        );
        console.log("App rendered successfully");
    } catch (e) {
        console.error("App render failed:", e);
        throw e;
    }
});
