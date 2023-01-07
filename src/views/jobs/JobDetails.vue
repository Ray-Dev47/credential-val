<template>
  <div>
     <h1>Job Details</h1>
     <p>The id is: {{ $route.params.id }}</p>
     <!-- <p>{{job.details}}</p> -->
  </div>
</template>

<script>
export default {
    props: ['jobs']

}
</script>

<style>

</style>