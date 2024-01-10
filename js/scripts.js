// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            message: 'Template HTML CSS Vue',
        };
    },
    methods:{

    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (email) {
            console.log(email.data.response, typeof email.data.response)
        });

    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');