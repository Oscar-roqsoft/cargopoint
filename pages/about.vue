<template>
    <div class="bg-[url('/Photo.png')] bg-center md:bg-cover ">
        <div class="  max-w-[1150px] px-4 mx-auto h-full flex justify-start items-center">
            <section class=" min-h-[500px] md:min-h-screen  text-gray-100 flex flex-col justify-center h-full">
                 <span class="border-l-2 pl-2 text-xs border-orange-400">Logistics & Supply Chain Solutions</span>
                 <h1 class="text-4xl my-2 font-bold">
                    About Our Logistics
                 </h1>
                
             </section>
        </div>
    </div>
    
    <section>
        <div class=" max-w-[1150px] px-4   mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[450px] ">
                <div class="flex bg-[url('/aboutImg.png')] bg-cover justify-center items-center h-[360px] my-8">
                    <!-- <img src="/aboutImg.png" class="relative" alt=""> -->
                    <div  class="relative top-40 md:top-20 md:left-44 p-5 w-[240px] z-10 bg-[#f4f4f4]">
                       <img src="/aboutImg2.png" alt="">
                    </div>
                </div>
                <div class="flex justify-center items-center mt-14 md:mt-0">
                    <div class="py-4 md:p-4 text-sm text-gray-600">
                        <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">About Us</span>
                        <h1 class="text-xl text-gray-950 font-bold my-2">Our Company Overview</h1>
                        <p class="">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div class="grid grid-cols-3 gap-2 md:gap-5 my-2">
                            <span class="bg-gray-300 hover:bg-[#FFB629] text-gray-950 inline-flex justify-center items-center py-3 px-2">Our Approch</span>
                            <span class="bg-gray-300 hover:bg-[#FFB629] text-gray-950 inline-flex justify-center items-center py-3 px-2">Our Approch</span>
                            <span class="bg-gray-300 hover:bg-[#FFB629] text-gray-950 inline-flex justify-center items-center py-3 px-2">Our Approch</span>
                        </div>
                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam 
                        eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
                        </p>
                        
                        <button type="button" class="text-white bg-gradient-to-r my-2 from-[#091242] via-[#414878] to-[#4c5481] hover:bg-gradient-to-br 
                        focus:ring-4 focus:outline-none focus:ring-[#6c739f]  font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
     </section>


     <!-- what we do section  -->
    <ServicesSection />

   <!-- our team section -->
   <section>
    <div class="max-w-[1150px] p-4 mx-auto">
        <div class="pb-10 flex justify-center items-center">
            <div class="flex flex-col items-center justify-center">
                <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">The Transporters</span>
                <h1 class="text-gray-950 font-extrabold text-lg my-1">Meet My Expert Team</h1>
                <Team/>
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

 <!-- FAQ section -->
   
 <section>
    <div class="bg-[#d4d4d4] ">
        <FAQ class="pb-24 md:pb-0 mb-10 " />
        <div class="max-w-[1150px] px-4   mx-auto pb-10">
            <div class="grid grid-cols-2 md:grid-cols-4">
                <img src="/gallery.png" >
                <img src="/gallery1.png">
                <img src="/gallery2.png">
                <img src="/gallery3.png">
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