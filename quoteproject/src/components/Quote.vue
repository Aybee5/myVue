<template>
    <div class="panel panel-default">
        <div class="panel-body quote">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .panel-body{
        font-size: 24px;
        color: #6e6e6e;
        font-family: 'Arizona', cursive;
    }
    .quote{
        cursor: pointer;
    }
    .quote:hover{
        background: #ffe2e2;
    }
</style>