<template>
  <div>
    <div class="form-group">
      <label for="FirstName">First Name</label>
      <input type="text" id="FName" class="form-control" :>
    </div>
    <div class="form-group">
      <label for="LastName">Last Name</label>
      <input type="text" id="LName" class="form-control" v-model="Lname">
    </div>
  </div>
</template>

<script>
export default {
    props: ['value'],
    methods:{

    },
    computed:{
        firstName(){
            return this.value.split(" ")[0]
        },
        lastName(){
            return this.value.split(" ")[1]
        }
    }
    
}
</script>

<style scoped>

</style>