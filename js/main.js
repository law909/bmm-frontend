document.addEventListener('alpine:init', () => {
    Alpine.data('subscribeForm', () => ({
        eventgeneratorList: [],
        formData: {
            email: null,
            eventgenerator: null,
            parameter: null,
        },
        init() {
            fetch(new URL('/api/eventgenerators', API_URL))
                .then((response) => response.json())
                .then((data) => {
                    this.eventgeneratorList = data.data;
                });
        },
        save() {
            fetch(new URL('/api/subscriptions', API_URL), {
                method: 'POST',
                body: new URLSearchParams(this.formData)
            })
        }
    }));
});
