document.addEventListener('alpine:init', () => {
    Alpine.data('confirm', () => ({
        success: null,
        ready: false,
        init() {
            let myUrlParams = new URLSearchParams(window.location.search),
                s = myUrlParams.get('s');

            fetch(new URL('/templates/header.html', document.URL))
                .then(response => response.text())
                .then(html => this.$refs.header.innerHTML = html);

            fetch(new URL('/templates/footer.html', document.URL))
                .then(response => response.text())
                .then(html => this.$refs.footer.innerHTML = html);

            if (s) {
                fetch(new URL('/api/subscriptions/confirm/' + s, API_URL), {
                    method: 'POST'
                })
                    .then((response) => response.json())
                    .then((data) => {
                        this.success = data.success;
                    })
                    .finally(() => {
                        this.ready = true;
                    })
            }
        },
    }));
});
