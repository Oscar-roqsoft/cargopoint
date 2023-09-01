<template>
    <div
    class="grid grid-cols-1  md:grid-cols-3 gap-3   mt-6">
        <div 
        v-for="item in pricePlan"
        class=" bg-[#d6d6d6] hover:bg-[#091242] text-gray-950 hover:text-gray-200 rounded shadow-md p-8 flex flex-col items-center 
        justify-between transition-all">
           
            <h1 class="mb-4">{{ item.planType }}</h1>
            <h2 class="mb-8 text-3xl ">${{ item.price }}<span class="text-xs">/month</span> </h2>
            <div class="border-t-[0.5px] border-gray-400 ">
                <div v-for="list in item.priceValues"
                class="flex flex-col border-b-[0.5px] border-gray-400 text-sm px-5 py-1 text-center ">
                    <span class="">{{ list }}</span>
                </div>
            </div>
            <div class="pt-6 border-gray-400 px-4">
                <button type="button" class="text-black bg-gradient-to-r  hover:bg-gradient-to-br 
                from-[#FFB629] via-[#FFDA56] to-[#d99644] focus:ring-4 focus:outline-none focus:ring-[#6c739f]  
                font-medium rounded text-[8px] px-4 py-2 text-center mr-2 mb-2">Choose Plan</button>
            </div> 
        </div>
    </div>
</template>


<script setup>

const pricePlan =[
    {
        planType:'Basic',
        price:'34',
        priceValues:['single truck','full insurance','500km','Real Estate Insurance']
    },
    {
        planType:'Standard',
        price:'34',
        priceValues:['single truck','full insurance','500km','Real Estate Insurance']
    },
    {
        planType:'Premium',
        price:'34',
        priceValues:['Single truck','Full insurance','500km','Real Estate Insurance']
    }
]
</script>