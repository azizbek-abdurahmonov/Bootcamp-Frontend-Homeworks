<template>
    <div
        class="mt-[160px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10 place-items-center">

        <location-card v-for="location in locations" :location="location" />
    </div>
</template>

<script setup lang="ts">
import LocationCard from '@/modules/locations/components/LocationCard.vue'
import type { PropType } from 'vue';

const props = defineProps({
    locations:{
        type:Array as PropType<Array<Location>>,
        required:true
    }
});


</script>