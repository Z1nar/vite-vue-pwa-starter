import {defineConfig} from 'vite' // Import the defineConfig function from Vite
import vue from '@vitejs/plugin-vue' // Import the Vue plugin for Vite
import {VitePWA} from 'vite-plugin-pwa'; // Import the Vite PWA plugin

export default defineConfig({
    plugins: [vue(), // Use the Vue plugin
        VitePWA({
            registerType: 'autoUpdate', // Automatically update the service worker
            strategies: 'injectManifest', // Use the injectManifest strategy for PWA
            injectManifest: {
                swSrc: 'src/my-service-worker.js', // Path to your custom service worker
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'] // Specify which files to cache
            },
            manifest: {
                name: 'Vite + Vue PWA Starter by Robin', // The name of your PWA
                short_name: 'ViteVuePWAStarter', // Short name of your PWA
                theme_color: '#ffffff', // Theme color of your PWA
                icons: [
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                ],
            },
            devOptions: {
                enabled: true, // Enable PWA during development
            },
            workbox: {
                clientsClaim: true, // Take control of the clients as soon as the service worker is active
                skipWaiting: true, // Skip the waiting phase and activate the new service worker immediately
            }
        }),
    ],
})
