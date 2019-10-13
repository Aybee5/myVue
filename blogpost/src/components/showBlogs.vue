<template>
    <div class="container" id="show-blog">
        <div v-for="blog in blogs" id="single-blog">
            <h3 v-rainbow>Title: {{blog.title}}</h3>
            <article>Content: {{blog.body}}</article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            blogs: []
        }
    },
    methods:{

    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
            this.blogs = data.body;
        })
    }
}
</script>

<style scoped>
    #show-blog{
        max-width: 800px;
        margin: 0 auto;
    }
    #single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>