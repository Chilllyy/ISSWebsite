import { createInertiaApp } from '@inertiajs/react';
import { Ziggy } from '@/ziggy';
import { route } from 'ziggy-js';

const appName = 'ISS Urine Tank Tracker';

globalThis.route = (name, params, absolute) => route(name, params, absolute, Ziggy);

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
