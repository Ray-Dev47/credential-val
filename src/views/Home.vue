<template>
    <div>
        <p>This is Home yeah </p>
        <button @click="$router.push({ name: 'About' })">Navigate to About</button>
        <button @click="$router.push({ name: 'Jobs' })">Navigate to Jobs</button>
    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },
}
</script>
