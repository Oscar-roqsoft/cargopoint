<template>


    <div
    class="grid grid-cols-1  md:grid-cols-3 gap-3 md:gap-5 mt-6">
        <div  v-animate-on-scroll
        v-for="item in teams"
        class="w-[300px] md:w-[200px] bg-gray-900 rounded">
            <div>
                <img :src="item.img" class="w-full">
            </div>
            <div class="p-3 flex flex-col justify-center items-start">
                <p class="text-gray-50 text-sm font-medium">{{ item.name }}</p>
                <p class="text-gray-400 text-xs">{{ item.work }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const teams =[
    {
      img:"/team.png",
      name:'jessca Arrow',
      work:'designer'  
    },
    {
        img:"/team2.png",
        name:'jessca Arrow',
        work:'designer'  
    },
    {
        img:"/team3.png",
        name:'jessca Arrow',
        work:'designer'  
    }
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