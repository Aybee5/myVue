<template>
    <div class="container mt-2">
        <form>
            <div class="form-group">
                <label for="blogTitle">Blog Title</label>
                <input type="text" class="form-control" v-model.lazy="blog.title" placeholder="Blog post">
            </div>
            <label>Blog Content:</label>
            <textarea class="form-control" rows="3" placeholder="Blog content" v-model.lazy="blog.content"></textarea>
            <button type="button" class="btn btn-primary mt-2" @click.prevent="onSubmitted">Submit</button>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="ninga" v-model="blog.categories">
                <label>Wizards</label>
                <input type="checkbox" value="wizard"  v-model="blog.categories">
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
            </div>
            <label>Authors</label>
            <select v-model="blog.author">
                <option v-for="(author,key) in authors" :key="key">{{author}}</option>
            </select>
        </form>
        <div id="preview" v-if="submitted">
            <p>Blog Title: {{blog.title}}</p>
            <p>Blog COntent:</p>
            <p>{{blog.content}}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="(category,key) in blog.categories" :key="key">{{category}}</li>
            </ul>
            <p>Author {{blog.author}}</p>
        </div> 
    </div>
    
  
</template>

<script>
export default {
    data(){
        return {
            blog: {
                title:'',
                content: '',
                categories: [],
                author: ''
            },
            authors : ['Ibrahim', 'Abdullahi'],
            submitted : false
        }
    },
    methods:{
        onSubmitted(){
            this.submitted = true
            let data = this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title: this.blog.title,
                body: this.blog.content,
                userID: 1
            }).then(function(data){
                console.log(data)
            })
            
        }
    }
}
</script>

<style scoped>
    #preview {
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
    }
    select{
        display: inline;
    }
</style>