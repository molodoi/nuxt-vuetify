<template>
    <div class="searchForm">        
        <v-container grid-list-sm align-content-center>
            <div class="inline-searchForm">
                <v-layout row wrap elevation-0>                    
                    <v-flex xs12 xl5>
                        <v-text-field id="testing" name="input-1" label="Votre recherche"></v-text-field>
                    </v-flex>
                    <v-flex xs12 xl3>
                        <v-select :items="items" v-model="e1" label="Choisissez une langue" single-line auto hide-details></v-select>
                    </v-flex>
                    <v-flex xs12 xl3>
                        <v-select :items="states" v-model="e2" label="Select" single-line auto hide-details></v-select>
                    </v-flex>
                    <v-flex xs12 xl1>
                        <v-btn large block class="searchBtn" color="pink">
                            <v-icon>search</v-icon>
                        </v-btn>   
                    </v-flex>
                </v-layout>
            </div>                
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 'Anglais',
        e2: 'California',
        items: [
          'Anglais',
          'Allemand',
          'Italien',
          'Portugais',
          'Espagnol',
          'Mandarin'
        ],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }
</script>


<style scoped>
.inline-searchForm{
    /* background-color: rgba(240, 240, 240, 1); */
    background-color:#f5f5f5;
    padding: 0px 10px 2px 10px;
    border-radius: 5px;
    width: 70%;
    margin:0 auto;
}
.center{
    text-align: center;
    margin:0 auto;   
}

/* Extra Small Devices, Phones */ 
@media only screen and (max-width : 480px) {
    .inline-searchForm{
        width: 100%;
    }
}

/* Custom, iPhone Retina */ 
@media only screen and (max-width : 320px) {
    .inline-searchForm{
        width: 100%;
    }
}
>>> .input-group__details {
    min-height: 8px;
}

>>> .searchBtn .btn__content{
    color:#fff;
}

</style>