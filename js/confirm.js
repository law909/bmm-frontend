document.addEventListener('alpine:init', () => {
    Alpine.data('confirm', () => ({
        success: null,
        ready: false,
        init() {
            let myUrlParams = new URLSearchParams(window.location.search);

            fetch(new URL('/api/subscriptions/confirm/' + myUrlParams.get('s'), API_URL), {
                method: 'POST'
            })
                .then((response) => response.json())
                .then((data) => {
                    this.success = data.success;
                })
                .finally(() => {
                    this.ready = true;
                })
        },
    }));
});
