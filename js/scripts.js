// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            message: 'Template HTML CSS Vue',
            email:[],
        };
    },
    methods:{

    },
    mounted(){
        //ciclo per creare 10 email casuali tramite chiamata di api random mail
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((objEmail) =>{
                this.email.push(objEmail.data.response);    
                console.log(objEmail.data.response, typeof objEmail.data.response)
            });
        }

    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');