Vue.createApp({
    data () {
        return {
            name: 'Julian',
            age: 35,
            imageLink:"https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/6/f/8/16f84077cb371be98a41ceea873e618c.jpg"
        }
    },
    methods: {
        age_5(){
            return this.age + 5;
        },
        favoriteNumber() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return 0;
            } else {
                return 1;
            }
        }
    }
}).mount('#assignment')