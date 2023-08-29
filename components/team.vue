<template>
    <div class="pb-10 flex justify-center items-center">
        <div class="flex flex-col items-center justify-center">
            <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">Our Team</span>
            <h1 class="text-gray-950 font-extrabold text-lg my-1">Meet My Expert Team</h1>
            <div
            class="grid grid-cols-1  md:grid-cols-3 gap-3 md:gap-5 mt-6">
                <div  v-for="item in teams"
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