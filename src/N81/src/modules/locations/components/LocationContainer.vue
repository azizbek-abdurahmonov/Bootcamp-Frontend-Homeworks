<template>

    <article
        class="mt-[20px] bg-defaultBackground content-padding">
        <div class="flex flex-col items-center justify-center">
            <!--locations tab-->
            <locations-tab @changeCategory="onChangeLocations"/>

            <!--Locations grid-->
            <locations-grid :locations="locations"/>
        </div>
    </article>

</template>

<script setup lang="ts">

import LocationsTab from './LocationsTab.vue';
import LocationsGrid from './LocationsGrid.vue';
import { AirBnbApiClient } from '@/infrastructures/apiClients/airBnbApiClient/brokers/AirBnbApiClient';
import { onBeforeMount, ref } from 'vue';
import { Location } from '@/modules/models/Location';
import type { Guid } from 'guid-typescript';

const airBnbApiClient = new AirBnbApiClient();
const locations = ref<Location[]>([]);

onBeforeMount(async () => {
    await loadLocationsAsync();
})

const loadLocationsAsync = async () => {
    const locationsResponse = await airBnbApiClient.location.getAsync();
    if(locationsResponse.isSuccess){
        locations.value = locationsResponse.response!;
    }
}

const onChangeLocations = async (id : Guid) => {
    const locationsResponse = await airBnbApiClient.location.getByCategoryId(id);
    if(locationsResponse.isSuccess){
        locations.value = locationsResponse.response!;
    }
} 

</script>