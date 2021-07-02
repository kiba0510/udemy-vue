const app = Vue.createApp({
    data() {
        return {
            name: '', confirmedInput: ''
        };
    },
    methods: {
        alertCall() {
            alert('Hello!!!');
        },
        setName(event) {
            this.name = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.setName;
        }
    }
});

app.mount('#assignment')