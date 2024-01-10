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
    created(){
        //ciclo per creare 10 email casuali tramite chiamata di api random mail
        generatore(this.email);
    },
    mounted(){
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');

function generatore(array){
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((objEmail) =>{
            array.push(objEmail.data.response);    
        });
    }
}