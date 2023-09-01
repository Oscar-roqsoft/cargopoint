<template>

    <section class="min-h-[300px] md:min-h-[200px] py-6 bg-gray-200">
        <div class="max-w-[1150px] px-4 mx-auto flex flex-col items-center text-gray-800">
            <div class="md:w-[30%] mr-4 md:my-4">
                <span class="text-xs border-l-2 pl-2 border-orange-500">What can we do</span>
                <h2 class="text-lg font-semibold">Safe & Reliable Cargo Solutions</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 md:gap-6"> 
                <div v-animate-on-scroll
                v-for="item in services"
                class="flex mt-4">
                    <div class="flex items-start pt-2 mr-4">  
                        <img :src="item.icon" alt="">
                    </div>
               
                    <div class="h-[100px] flex flex-col ">
                        <nuxt-link :to="`details/${item.id}`" class="text-sm md:text-xl text-gray-800 hover:text-[#FFB629]  font-semibold leading-tight">{{ item.title }}</nuxt-link>
                        <p class="text-[10px] md:text-sm  text-gray-500">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
            <button type="button" class="text-white bg-gradient-to-r from-[#091242] via-[#414878] to-[#4c5481] hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-[#6c739f]  font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">More Work</button>
        </div>
   </section>

</template>






<script setup>


const services =[
    {
        id:"Sea_Transport_Services",
        icon:"/Icon.png",
        title:"Sea Transport Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        id:"Warehousing_Services",
        icon:"/Icon5.png",
        title:"Warehousing Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        id:"Air_Frieght_Services",
        icon:"/Icon.svg",
        title:"Air Frieght Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        id:"Project_And_Exhibition",
        icon:"/Icon3.png",
        title:"Project And Exhibition",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        id:"Local_Shipping_Services",
        icon:"/Icon.svg",
        title:"Local Shipping Services",
        desc:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
        id:"Customer_Clearance",
        icon:"/Icon3.png",
        title:"Customer Clearance",
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