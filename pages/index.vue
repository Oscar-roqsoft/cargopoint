<template>

    <div class="bg-[url('/Photo.png')]  bg-auto bg-center md:bg-contain  bg-no-repeat pt-10">
       <div class="  max-w-[1150px] px-4 mx-auto">
           <section class="min-h-[470px] md:min-h-screen  text-gray-100 flex flex-col justify-center items-start">
                <span class="border-l-2 pl-2 text-xs border-orange-400">Logistics & Supply Chain Solutions</span>
                <h1 class="text-4xl my-2 font-bold">Your Gateway <br>
                    to any Destination <br> in the World
                </h1>
                <p class="text-sm md:w-[50%]">In augue ligula, feugiat ut nulla consequat. Ut 
                    est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
                </p>
                <button type="button" class="my-2 focus:outline-none text-gray-950 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]
                 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-3 py-2 mr-2">Explore More</button>
            </section>


           
       </div>
    </div>
    
     <services/>

     <section>
        <div class="">
            <div class="bg-[url('/Photo1.png')] w-full min-h-[200px] md:min-h-[250px] opacity-85"></div>
            <div class="max-w-[1150px] px-4 mx-auto flex justify-center items-center ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 min-h-[500px] md:min-h-[400px] p-4 mb-16 md:px-16 md:pt-10 md:mb-0  relative bottom-24 bg-[#f4f4f4] rounded">
                    <div>
                        <span class="text-xs border-l-4 px-2 py-1 border-[#FFB629] bg-gray-600 text-white">Why us</span>
                        <h1 class="text-gray-950 text-4xl font-semibold my-4">We provide full range global logistics solution</h1>
                        <p class="my-4 text-sm">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 
                        </p>
                        <p  class="my-4 text-sm">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        <div>
                            <div class="inline-flex justify-center items-center p-2 bg-[#FFB629] text-gray-950 rounded-full mr-2"> 
                                <Icon name="uil:box"/>
                            </div>
                            <span>Delivery on Time</span>
                        </div>
                        <div  class="my-4">
                            <div class="inline-flex justify-center items-center p-2 bg-[#FFB629] text-gray-950 rounded-full mr-2"> 
                                <Icon name="uil:box"/>
                            </div>
                            <span>Optimized Travel Cost</span>
                        </div>
                    </div>
                    <div class="bg-[url('/Image.jpg')] bg-center bg-cover h-full">
                        <div class="relative top-36 md:top-52 md:right-28 w-[280px] bg-[#f4f4f4] p-6 md:p-8">
                           <img src="/Photo2.png" alt="" class="relative">
                        </div>
                    </div>
                </div> 
               
            </div>
            
            <div class="max-w-[1150px] px-4 mx-auto flex justify-center items-center p-4">
                <div class="flex border-y  border-gray-300">
                    <div class="p-4 flex items-center">
                        <span class="text-lg font-semibold text-gray-950">1342</span>
                        <span class=" w-[10px] h-[10px] bg-yellow-400  mx-2"></span>
                        <span class=" text-[10px] leading-tight md:text-xs text-gray-900">Delivered Packages</span>
                    </div>
                    <div class="border-l-2  border-gray-300 flex items-center p-4">
                        <span class="text-lg font-semibold text-gray-950">9842</span>
                        <span class=" w-[10px] h-[10px] bg-yellow-400  mx-2"></span>
                        <span class="text-[10px] leading-tight md:text-xs text-gray-900">Satisfied Clients</span>
                    </div>
                </div>
            </div>
        </div>
     </section>

     <section>
        <div class="max-w-[1150px] px-4 mx-auto flex flex-col items-center relative top-20">
            <h1 class="mb-8 font-bold text-gray-950 text-3xl capitalize">Transporting Across The World</h1>
            <workCard class="relative"/>
            <div class="h-[1]"></div>
        </div>

        <div class="h-[200px] md:h-[250px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] flex justify-center items-center pt-24 ">
            <button type="button" class="text-white bg-gradient-to-r from-[#091242] via-[#414878] to-[#4c5481] hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-[#6c739f]  font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">More Work</button>
        </div>
     </section>

      <!-- testimonial section -->
     <section class="bg-white py-4 md:p-6">
        <div  class="max-w-[850px] px-4 mx-auto">
            <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white">Testimonial</span>
             <Testimonials/>
        </div>
     </section>


     <section class="pb-10 ">
        <div class="grid grid-cols-1  md:grid-cols-2 min-h-[400px]">
            <div class="bg-[#091242] flex flex-col justify-center items-center">
                <div class=" md:max-w-[1150px] md:px-4  md:mx-auto  ">
                        <img src="/Image1.png" class="h-[200px]  md:h-[300px]  md:max-w-[600px] relative top-8 md:top-0 md:left-28 shadow-lg rounded" alt="">
                </div>
            </div>
            <div class=" max-w- [1150px] px-4 py-14  md:py-0 mx-auto flex justify-center items-center md:pl-14">
                <div class="h-[300px] max-w-[500px]">
                    <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">Why Choose</span>
                    <h1 class="text-3xl text-gray-950 mt-2 font-extrabold">We create opportunity to reach potential</h1>
                    <p class="my-2">
                        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 
                    </p>
                    <div class="grid grid-cols-2 gap-5 ">
                        <div v-for="i in 6" class="flex place-items-center">
                            <div class="inline-flex justify-center items-center p-1  bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] text-black rounded-full">
                                 <Icon name="uil:box"/>
                            </div>
                            <span class="text-sm ml-2">Safe Package</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    <!-- team section -->
     <section>
        <div class="max-w-[1150px] px-4 mx-auto">
               <Team/>
        </div>
     </section>


     <!-- contact section -->
     <section class="bg-[#091242]">
        <div class="max-w-[1040px] px-4 mx-auto">
            <Contact />
        </div>
     </section>


     <!-- blog section -->

     <section>
        <div class="md:max-w-[1000px] px-4 mx-auto text-gray-700">
               <Blog/>
        </div>
     </section>

</template>

<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

 
</script>