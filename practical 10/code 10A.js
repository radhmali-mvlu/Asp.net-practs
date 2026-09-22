/////manifest.json:-
{
  "name": "My PWA Application",
  "short_name": "MyPWA",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d6efd",
  "icons": [
    {
      "src": "icons/icon1.png",
      "sizes": "447x447",
      "type": "image/png"
    },
    {
      "src": "icons/icon2.png",
      "sizes": "447x447",
      "type": "image/png"
    }
  ]
}

///index.html:-
<!DOCTYPE html>
<html>
<head>
    <title>My PWA</title>
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#0d6efd">
</head>
<body>
    <h1>My Progressive Web App</h1>
    <button onclick="showNotification()">
        Show Notification
    </button>
    <script src="app.js"></script>
</body>
</html>

///app.js:-
if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker Registered'));
}
function showNotification() {
}
Notification.requestPermission().then(permission =>
{
    if (permission === 'granted')
    {
        navigator.serviceWorker.ready.then(registration =>
        {
            registration.showNotification('PWA Notification', {
                body: 'Push Notification Working Successfully!',
                icon: 'icons/icon1.png'
            });
        });
    }
});

/////service-worker.js:-
self.addEventListener('install', event =>
{
    console.log('Service Worker Installed');
});
self.addEventListener('activate', event =>
{
    console.log('Service Worker Activated');
});

/////program.cs:-
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();


