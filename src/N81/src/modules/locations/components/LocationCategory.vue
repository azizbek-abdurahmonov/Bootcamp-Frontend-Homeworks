<template>
        <!--Category-->
        <div @click="onChange" class="h-[80px] select-common group min-w-[50px] flex flex-col justify-center items-center">
            <img class="h-[24px] w-[24px] mb-2 select-logo-img select-transition"
                :src="locationCategory.imageUrl"
                alt="category bor:)">
            <h5 class="text-xs font-medium select-text select-transition whitespace-nowrap">{{locationCategory.name}}</h5>
            <div class="mt-[10px] w-4/5 h-[2px] select-item select-transition"
                :class="{'opacity-100': isCurrentCategorySelected}"
            ></div>
        </div>
</template>

<script setup lang="ts">
import type { LocationCategory } from '@/modules/models/LocationCategory';
import { Guid } from 'guid-typescript';
import {computed} from "vue";

    const props = defineProps({
        locationCategory:{
            type:Object as () => LocationCategory,
            required:true
        },
        selectedCategoryId:{
            type:Object as () => Guid,
            required:true
        }
    });

    const emit = defineEmits<{
        changeCategory:[id:Guid]
    }>();

    const onChange = () => {
        emit('changeCategory', props.locationCategory.id)
    }

    const isCurrentCategorySelected = computed(() => {
        return props.locationCategory.id === props.selectedCategoryId;
    });

</script>