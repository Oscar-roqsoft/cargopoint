<template>
    <div class="bg-[url('/Photo.png')] bg-center md:bg-cover ">
        <div class="  max-w-[1150px] px-4 mx-auto h-full flex justify-start items-center">
            <section class=" min-h-[500px] md:min-h-screen  text-gray-100 flex flex-col justify-center h-full">
                 <span class="border-l-2 pl-2 text-xs border-orange-400">Logistics & Supply Chain Solutions</span>
                 <h1 class="text-4xl my-2 font-bold">
                    Our Logistics Services
                 </h1>
                
             </section>
        </div>
    </div>

    <!-- services section -->
    <ServicesSection />

    <!-- testimonials section -->
    <section class="my-10">
        <div class="max-w-[1000px] px-4  mx-auto">
           <Testimonials/>
        </div>
    </section>

    <section>
        <div class="max-w-[1150px] px-4 mx-auto flex justify-center items-center p-4">
            <div class="grid grid-cols-2 md:grid-cols-4 border-t  border-gray-300">
                <div class="p-4 flex items-center">
                    <span class="text-2xl font-semibold text-gray-950">1342</span>
                    <span class=" w-[10px] h-[10px] bg-yellow-400  mx-2"></span>
                    <span class=" text-[10px] leading-tight md:text-sm text-gray-900">Delivered Packages</span>
                </div>
                <div class="border-l-2  border-gray-300 flex items-center p-4">
                    <span class="text-2xl font-semibold text-gray-950">9842</span>
                    <span class=" w-[10px] h-[10px] bg-yellow-400  mx-2"></span>
                    <span class="text-[10px] leading-tight md:text-sm text-gray-900">Satisfied Clients</span>
                </div>
                <div class=" border-t-2 md:border-t-0 md:border-l-2  border-gray-300 flex items-center p-4">
                    <span class="text-2xl font-semibold text-gray-950">4342</span>
                    <span class=" w-[10px] h-[10px] bg-yellow-400  mx-2"></span>
                    <span class="text-[10px] leading-tight md:text-sm text-gray-900">Satisfied Clients</span>
                </div>
                <div class="border-t-2 md:border-t-0 border-l-2  border-gray-300 flex items-center p-4">
                    <span class="text-2xl font-semibold text-gray-950">7242</span>
                    <span class=" w-[10px] h-[10px] bg-yellow-400  mx-2"></span>
                    <span class="text-[10px] leading-tight md:text-sm text-gray-900">Satisfied Clients</span>
                </div>
            </div>
        </div>
    </section>
</template>