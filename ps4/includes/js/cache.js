// Handling cache
// Caching is now handled by cache.html + iframe_cache.js for firmware based caching
// This way we dont cache just everything for everyone. faster caching.

// Offline caching is started deliberately from the PS-logo button in events.js.
// This lets the user choose when to download the firmware-specific cache.

// Used if terminating cache process early
function terminateCache() {
    if (window.applicationCache) {
        // Status 3 is 'downloading', Status 1 is 'checking'
        if (window.applicationCache.status === 3 || window.applicationCache.status === 1) {
            console.log("Terminating cache process to save memory...");
            window.applicationCache.abort();
            var appTitle = (typeof projectName !== 'undefined') ? projectName : "WebKitty";
            document.title = appTitle;
            window.applicationCache.removeEventListener("progress", null);
            window.applicationCache.oncached = null;
            window.applicationCache.onupdateready = null;
        }
    }
}