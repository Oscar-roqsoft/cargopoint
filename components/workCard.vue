<template>
     
<div  class="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-5 gap-2 md:gap-4" >
    <div   v-for="item in workCard" class="relative bg-white border  border-gray-200 rounded-lg">
        <a href="#" class="relative ">
            <img class="rounded z-0 w-full h" :src="item.img" alt="" />
        </a> 
        <div class="absolute z-20 inset-3 top-80 text-lg md:text-xs md:top-52">
        
            <p class="font-normal  text-gray-300 ">
                {{ item.desc }}
            </p>
            <p class=" text-[#FFB629]">
                {{ item.work }}
            </p>
            
        </div>
    </div>
</div>

</template>


<script setup>


const workCard = [
    {img:'/work.png',desc:'liquid transportation.',work:'Premium Tankers'},
    {img:'/work2.png',desc:'packaging solution',work:'Warehouse Management'},
    {img:'/work3.png',desc:'contract logistics',work:'Road Transportation'},
    {img:'/work4.png',desc:'Warehouse & Distribution',work:'Large Warehouse'},
    {img:'/work5.png',desc:'Specialized Transport',work:'Ocean Transports'}
]
</script>