// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            email:[],
        };
    },
    methods:{
        generatore(){
            this.email=[];
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((dataEmail) =>{
                    this.email.push(dataEmail.data.response);          
                });
            }
        } 
    },
    mounted(){
        this.generatore();
    }
    // Monto l'istanza di Vue in pagina
}).mount('#app');

//GENERAL FUNCTION
//ciclo per creare 10 email casuali tramite chiamata di api random mail
