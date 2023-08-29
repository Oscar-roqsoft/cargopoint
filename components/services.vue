<template>

    <section class="min-h-[300px] md:min-h-[200px] my-6">
        <div class="max-w-[1150px] px-4 mx-auto flex flex-col md:flex-row text-gray-800">
            <div class="md:w-[30%] mr-4 md:my-4">
                <span class="text-xs border-l-2 pl-2 border-orange-500">What can we do</span>
                <h2 class="text-lg font-semibold">Safe & Reliable Cargo Solutions</h2>
            </div>
            <div class="grid grid-cols-2 md:gap-6">
                <div v-animate-on-scroll
                v-for="item in services"
                class="flex mt-4">
                    <div class="flex items-start pt-2 mr-4">  
                        <img :src="item.icon" alt="">
                    </div>

                    <div class="h-[100px] flex flex-col ">
                        <h4 class="text-sm md:text-xl text-gray-800 font-semibold leading-tight">{{ item.title }}</h4>
                        <p class="text-[10px] md:text-sm  text-gray-500">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
   </section>

</template>






<script setup>



const services =[
    {
        icon:"/Icon.png",
        title:"Sea Transport Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        icon:"/Icon5.png",
        title:"Sea Transport Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        icon:"/Icon.svg",
        title:"Sea Transport Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        icon:"/Icon3.png",
        title:"Sea Transport Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
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