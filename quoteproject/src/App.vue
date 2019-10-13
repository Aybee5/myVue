<template>
  <div id="app" class="container">
    <app-new-quote @addedNewQuote="newQ"></app-new-quote>
    <app-quote> </app-quote>
    <app-quote-grid :quotes="quotes" @deletedQuote="deleteQoute"></app-quote-grid>
    <footer> Note that clicking on a qoute deletes it</footer>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  name: 'app',
  components: {
    appQuote: Quote,
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  },
  data(){
    return{
      quotes: [
        'Dare to do what is right',
      ],
      maxQuote: 10
    }
    
  },
  methods:{
    newQ(quote){
      this.quotes.push(quote)
    },
    deleteQoute(index){
      this.quotes.splice(index,1)
      console.log(index)
    }
  }
}
</script>

<style>

</style>
