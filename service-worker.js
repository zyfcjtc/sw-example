self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.responseWith(
            fetch(request).catch(error => {
                return new Response('<p>Oh, Ddear.</p>',{
                    headers: { 'Content-Type': 'text/html' }
                })
            })
        );
    }
})