<template>
    <div class="grid grid-cols-1 md:grid-cols-2 min-h-[450px] gap-4  md:my-10 py-10">
        <div class="pl-4 md:pl-6 lg:pl-10">
            <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white">FAQ</span>
             <h1 class="text-3xl font-semibold text-gray-950 mb-4">Frequently Asked <br> Questions</h1>
             <div>
                 

                <!-- articles display -->

                <div v-for="item in articleList " 
                 
                class="grid grid-cols-8 md:grid-cols-4  md:gap-3 mb-4">
                    
                        <div 
                        class=" col-span-7 md:col-span-3">
                            <h3 class="text-lg text-gray-800">{{ item.title }}</h3>
                            <p   class="text-xs text-gray-600  leading-tight"
                             :class="showValue===item.id?'block':'hidden'">
                                {{ item.article }}
                            </p>
                        </div>
                        <a  @click="showValue=item.id"  >  
                            <Icon v-if="showValue!=item.id"  name="uil:arrow-right" />
                            <Icon v-else  name="uil:arrow-down" />
                        </a>
                    
                </div>
               
             </div>
        </div>
        
        <div class="bg-[url('/FAQimg.png')] bg-cover h-full">
            <div class="flex justify-center items-center h-full">
                <div class=" bg-gray-800 relative top-28 md:top-0 md:right-60 p-8 shadow-lg rounded">
                    <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white">lets talk</span>
                    <p class="text-sm my-2 tracking-wider text-gray-100 capitalize">you Need any help?  get <br> free consultation</p>
                    <div class="flex justify-start items-center my-3">
                        <div class="p-1.5 bg-transparent border border-gray-500 rounded-full text-[#FFBE34] inline-flex justify-center items-center mr-1">
                            <Icon  name="material-symbols:call" size="14"/>
                        </div>
                    
                        <span class="text-gray-200 flex text-xs">
                            call us <br> 08167607945
                        </span>
                    </div>
                    <button type="button" class="text-black bg-gradient-to-r  hover:bg-gradient-to-br 
                    from-[#FFB629] via-[#FFDA56] to-[#d99644] focus:ring-4 focus:outline-none focus:ring-[#faf375]  
                    font-medium rounded text-[8px] px-4 py-2 text-center mr-2 mb-2">Choose Plan</button>
                </div>
            </div>
              
        </div>
        
    </div>
</template>


<script setup>

// const isVisible = ref(false)

const showValue =ref(null)

// const toggleVisible=()=>{
//     isVisible.value = !isVisible.value
// }

const articleList =[
   {
     id:1,
      title:"How can I pay for your logistics services?",
      article:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    },
    {
     id:2,
      title:"What payment methods are supported?",
      article:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    },
    {
     id:3,
      title:"Can i specify the delivery date when ordering?",
      article:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    },
    {
     id:4,
      title:"What options for logistics plan are available?",
      article:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    }
]

</script>