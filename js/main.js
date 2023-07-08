document.addEventListener('alpine:init', () => {
    Alpine.data('subscribeForm', () => ({
        isModalOpen: false,
        modalText: '',
        eventgeneratorList: [],
        formData: null,
        validation: null,
        selectedEg: null,
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
                        this.modalText = 'Küldtünk egy emailt a megerősítő linkkel, klikkelj rá!';
                        this.isModalOpen = true;
                        this.clearFormData();
                    } else {
                        this.validation = respdata.fields;
                        this.modalText = 'Ezzel az email címmel nem iratkozhatsz fel.';
                        this.isModalOpen = true;
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
