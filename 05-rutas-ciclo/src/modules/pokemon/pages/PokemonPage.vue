<template>
    <h1>Pokemon Page <span>#{{id}}</span></h1>
</template>

<script>
export default {

    data() {
        return {

        }
    },

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    created() {

    }
}
</script>
