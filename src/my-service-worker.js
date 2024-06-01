// Listen for the install event
self.addEventListener('install', event => {
    console.log('Service Worker: Install');
    // Perform install steps
});

// Listen for the activate event
self.addEventListener('activate', event => {
    console.log('Service Worker: Activate');
    // Perform activate steps
});

// Listen for the fetch event
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetch');
    // Perform fetch steps
});


