<template>

    <!--
        w-[calc(100%-10rem)] 
    -->
    <div class="flex flex-col items-center justify-center h-full w-full px-[20%] m-20">

        <!--Todo list-->
        <todo-list/>

        <!--New todo form-->
    </div>

</template>

<script setup lang="ts">

import TodoList from './TodoList.vue';

</script>