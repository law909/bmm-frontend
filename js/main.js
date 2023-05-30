document.addEventListener('alpine:init', () => {
    Alpine.data('subscribeForm', () => ({
        eventgeneratorList: [],
        formData: null,
        validation: null,
        clearFormData() {
            this.formData = {
                email: null,
                eventgenerator: null,
                parameter: null,
            }
        },
        init() {
            this.clearFormData();
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
                .then((response) => response.json())
                .then((respdata) => {
                    if (respdata.success) {
                        this.clearFormData();
                    } else {
                        this.validation = respdata.fields;
                        alert('Kérjük javítsa a pirossal jelölt mezőket.');
                    }
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => {
                });
        }
    }));
});
