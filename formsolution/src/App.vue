<template>
  <div id="app" class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offsert-3">
          <full-name/>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
              <input type="password" id="password" class="form-control" v-model="password">
          </div>
           <div class="form-group">
            <label class="mr-2">
              <input type="radio" v-model="saved" value="Yes"> Yes
            </label>
            <label>
              <input type="radio" v-model="saved" value="No"> No
            </label>
           </div>
          <button class="btn btn-primary" @click.prevent="submitting">
            Sign Up
          </button>
          <button class="btn btn-danger ml-2" @click.prevent="reset">
            Clear
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offsert-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{firstName}} {{lastName}}</p>
            <p>Email: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Save: {{saved}}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import FullName from './components/FullName.vue'
export default {
  name: 'app',
  components : {
    FullName
  },
  data(){
    return{
      Fname: '',
      Lname:'',
      email: '',
      password:'',
      saved: 'Yes',
      submitted: false
    }
  },
  methods:{
    submitting(){
      this.submitted = true
    },
    reset(){
      this.Fname =  '',
      this.Lname = '',
      this.email = '',
      this.password = '',
      this.submitted = false
    }
  }
}
</script>


</style>
