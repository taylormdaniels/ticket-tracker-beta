import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.APP_NAME || 'Ticket Tracker Pro';

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props}/>);
    },
    progress: {
        color: '#F87415'
    }
});