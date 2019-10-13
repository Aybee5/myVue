<template>
    <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-offset-2 form-group">
            <label>Quote</label>
            <textarea rows="3" class="form-control" v-model.trim="quote"></textarea>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-offset-2 form-group">
            <button class="btn btn-primary" @click.prevent="createNew"></button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            quote:''
        }
    },
    methods:{
        createNew(){
            this.$emit('addedNewQuote', this.quote)
            this.quote = ''
        }
    }
}
</script>

<style scoped>

</style>