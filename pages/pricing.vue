<template>

    <div class="bg-[url('/Photo.png')] bg-center md:bg-cover ">
        <div class="  max-w-[1150px] px-4 mx-auto h-full flex justify-start items-center">
            <section class=" min-h-[500px] md:min-h-screen  text-gray-100 flex flex-col justify-center items-start h-full">
                 <span class="border-l-2 pl-2 text-xs border-orange-400">Pricing</span>
                 <h1 class="text-4xl my-2 font-bold">
                    Our Best Price
                 </h1>
                
             </section>
        </div>
    </div>


 <!-- pricing section -->

 <section>
    <div class="max-w-[1150px] p-4 mx-auto">
        <div class="pb-10 flex justify-center items-center">
            <div class="flex flex-col items-center justify-center">
                <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">Pricing</span>
                <h1 class="text-gray-950 font-extrabold text-lg my-1">Our Best Pricing</h1>
                <PricingComp/>
            </div>
        </div>
    </div>
 </section>

  <!-- testimonials section -->
  <section class="bg-white py-4 md:p-6">
    <div  class="max-w-[850px] px-4 mx-auto">
        <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white">Testimonial</span>
         <Testimonials/>
    </div>
 </section>

</template>