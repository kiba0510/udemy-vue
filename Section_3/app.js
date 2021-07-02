const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add() {
      this.counter++;
      // this.counter = this.counter + 1; longer version
    },
    reduce() {
      this.counter--;
      // this.counter = this.counter - 1; longer version
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName; 
    },
    submitForm(event) {
      // event.preventDefault(); this is vanilla javascript - it can be used this way
      alert('Submitted!!!');
    },
    confirmedInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
