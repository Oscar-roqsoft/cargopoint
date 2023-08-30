<template>
    <div
    class="grid grid-cols-1  md:grid-cols-3 gap-3   mt-6">
        <div 
        v-for="item in 3"
        class=" bg-gray-200 text-gray-950 rounded shadow-md p-8 flex flex-col items-center justify-between">
           
            <h1 class="mb-4">basic</h1>
            <h2 class="mb-8 text-2xl ">$39<span class="text-xs">/month</span> </h2>
            <div class="">
                <div v-for="i in 5"
                class="flex flex-col border-t-[0.5px] border-gray-300 text-sm px-5 py-1">
                    <span class="">single truck</span>
                </div>
            </div>
            <div class="pt-6 border-t-[0.5px] border-gray-300 ">
                <button type="button" class="text-white bg-gradient-to-r from-[#091242] via-[#414878] to-[#4c5481] hover:bg-gradient-to-br 
                focus:ring-4 focus:outline-none focus:ring-[#6c739f]  font-medium rounded text-[8px] px-4 py-2 text-center mr-2 mb-2">Choose Plan</button>
            </div> 
        </div>
    </div>
</template>


<script setup>

</script>