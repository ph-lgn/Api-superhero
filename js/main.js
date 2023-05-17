
const {createApp} = Vue

createApp ({
  data() {
    return {
    // 1 tableau vide
     tabImages :[],
    // 2 mettre un chiffre par défaut et faire aussi un v-model sur le select avec images
     imagesShiba :5
    }
  },
  methods : {
    fetchData() {
      const urlShiba = 'http://shibe.online/api/shibes?count='+this.imagesShiba+''

      fetch(urlShiba)
      .then(response => response.json())
      .then(data => {

        // 3 envoyer mes datas dans la box vide
        this.tabImages = data
        
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error); 
      });
        

    },
    mounted() {
      // 4 On lance la fonction du Fetch ici avec this!!!
     this.fetchData()
      
    },
  },
  watch: {
    // 5 imagesShiba du début en fonction + relance notre function fetch
    imagesShiba () {
      this.fetchData();
    }
  }
}).mount('#application')


