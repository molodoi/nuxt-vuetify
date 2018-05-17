<template>
    <div class="searchForm">        
        <v-container fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-layout class="inline-searchForm" elevation-24>
                        <v-flex xs5>
                            <v-text-field
                            id="testing"
                            name="input-1"
                            label="Votre recherche"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                            <v-select
                                :items="items"
                                v-model="e1"
                                label="Choisissez une langue"
                                single-line
                                auto
                                hide-details
                            ></v-select>
                        </v-flex>
                        <v-flex xs3>
                            <v-select
                            :items="states"
                            v-model="e2"
                            label="Select"
                            single-line
                            auto
                            hide-details
                            ></v-select>
                        </v-flex>
                        <v-flex xs1>
                            <v-btn large class="searchBtn">OK</v-btn>   
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        e2: 'California',
        e3: null,
        e4: null,
        items: [
          { text: 'Anglais' },
          { text: 'Allemand' },
          { text: 'Italien' },
          { text: 'Portugais' },
          { text: 'Espagnol' },
          { text: 'Mandarin' }
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
    padding: 0px 15px 0px 5px;
    border-radius: 5px;
}
>>> .input-group__details {
    min-height: 8px;
}

>>> .searchBtn .btn__content{
    background-color: #f91942;
    color:#fff;
}

</style>