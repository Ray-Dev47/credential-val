<template>
  <div>
    <h1>Job Page</h1>
    <!-- <button @click="$router.push({ name: 'JobDetails' + job.id })">Navigate to Job Details</button> -->
    <div class="job" v-for="(job, i) in jobs" :key="i">
         <!-- <router-link :to="'/JobDetails/' + job.id">
         <h2 style="cursor:pointer;">{{job.title}}</h2>
          </router-link> -->
           <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
               <h2>{{job.title}}</h2>
          </router-link>
    </div>
    <!-- <JobDetails v-bind:jobs="jobs"/> -->
  </div>
</template>

<script>
// import JobDetails from './JobDetails.vue'

export default {
    // components:{JobDetails},
    data(){
        return{
            jobs: [
                {title: 'UX Designer', id: 1, details: 'This is details for UX Designer'},
                {title: 'DevOps', id: 2, details: 'This is details for Devops Engineer'},
                {title: 'Web Developer', id: 3, details: 'This is details for Web developer'}
            ]
        }
    }

}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.job h2:hover{
    background: #ddd;
}
.job a{
    text-decoration: none;
}

</style>