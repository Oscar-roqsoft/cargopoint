<template>
    <div class="flex justify-between items-center my-4">
        <h1 class="text-xl text-gray-950 font-bold">What Our Customer Say</h1>
        <span class="flex">
            <button type="button" data-carousel-prev class="inline-flex justify-center items-center p-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded-full" >
                <Icon name="material-symbols:arrow-back-rounded" />
            </button>
            <button type="button" data-carousel-next class="inline-flex justify-center items-center p-1 bg-[#FFB629] text-black rounded-full ml-2">
                <Icon name="material-symbols:arrow-forward" />
            </button>
        </span>
    </div>
     

    <div class="flex flex-col md:flex-row gap-3">
        <div v-animate-on-scroll
        v-for="item in testimonial"
        class="h-[240px] w-[310px] bg-[#f4f4f4]  text-gray-900 shadow p-6 " >
            <div class="flex justify-between items-center">
                <div class="flex">
                    <div class="h-[50px] w-[50px]">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="leading-tight flex flex-col ml-2">
                        <span class="text-sm text-gray-950">{{ item.name }}</span>
                        <span class="text-xs text-gray-600">{{ item.workplace }}</span>
                    </div>
                </div>
                <div>
                    <Icon name="uil:message"/>
                </div>
            </div>
            <p class="text-xs my-3 text-gray-600">{{ item.article }}</p>
            <div class="flex">
                <div   v-for="i in 5">
                    <Icon name="uil:star"/>
                </div>
            </div>
        </div>

       
    </div>
     
</template>


<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const testimonial =[
    {
       img:"/User.png",
       article:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
       name:"Kathleen Smith",
       workplace:"Fuel Company",   
    },
    {
       img:"/User1.png",
       article:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
       name:"Nickolas Jackson",
       workplace:"Automobile Company",   
    },
]
</script>


<style scoped>

.before-enter{
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-in-out ;
}
.enter{
    opacity: 1;
    transform: translateY(0);
}
</style>