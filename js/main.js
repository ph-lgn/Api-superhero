const {createApp} = Vue;

createApp({
  data(){
    return{
      tabDatas : [],
      input : "",
      filterDatas:[],
    }
  },
  methods : {
    returnData(){
      fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then(response => response.json())
      .then(data => {
        //  envoye datas dans le tab vide
        this.tabDatas = data;
      })
      .catch(error => {
        console.error('error:', error)
      })
    },
    InputKeyPress() {
      // Filtrer les données en fonction de ma valeur de recherche
      this.filterDatas = this.tabDatas.filter(filterHero=>
        filterHero.name.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  //   DisplayModal() {

 
  // }
  },
 
  mounted() {
    // lance la fonction du Fetch ici (attention : this)
   this.returnData()
    
  },
}).mount("#application")


