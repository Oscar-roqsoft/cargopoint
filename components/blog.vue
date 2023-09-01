<template>
    <div class="flex flex-col justify-center items-center py-4 md:p-4">
        <div class="flex flex-col justify-center items-center">
            <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">Blog Post</span>
            <h1 class="mb-6 mt-2 text-lg text-gray-950 font-bold">Our Latest News</h1>

            <div class="mb-4">
                <div v-for="item in blogPosts"  :key="item"
                class="grid grid-cols-1 md:grid-cols-2 border-y py-4 px-2 md:p-4"> 
                    <div class="flex">
                        <div  class="rounded relative" 
                            @mouseover="currentTarget=item.id">
                            <img :src="item.img" class="rounded z-0 relative">
                            <!-- <div  @mouseout="currentTarget=''"
                            :class="currentTarget===item.id?'block transition':'hidden'">
                                <div class="bg-gray-900 z-10  absolute inset-5  w-[300px] h-[200px] opacity-60"></div>
                                <button class="p-2 bg-transparent absolute inset-6 capitalize z-30 text-white">read more</button>
                            </div> -->
                        </div>


                        <div class="flex flex-col justify-start items-center px-2">
                            <Icon name="material-symbols:calendar-month-sharp" size="50" class="text-yellow-400"/>
                            <span class="text-gray-950 text-lg font-extrabold">{{ item.day }}</span>
                            <span class="text-xs">{{ item.month }}</span>
                        </div>

                    </div>
                    <div class="p-4 border-l">
                        <h2 class="text-gray-950 text-2xl font-semibold">{{ item.title }}</h2>
                        <p class="text-sm my-2">{{ item.desc }} </p>
                        <ul v-for="list in item.lists" :key="list">
                            <li class="text-xs list-disc ml-4">{{ list }}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button type="button" class="text-white bg-gradient-to-r from-[#091242] via-[#414878] to-[#4c5481] hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-[#6c739f]  font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">More Blog</button>

        </div>
    </div>

</template>


 <script setup>

 const isvisible = ref(true)
 const currentTarget = ref(1)

 const toggleVisible =(e)=>{
    isvisible.value = !isvisible.value
 }
const blogPosts = [
    {
        id:1,
        img:"/blog.png",
        day: '08',
        month: "september",
        title: "Inland freight a worthy  solution for your business",
        desc:"We are dedicated in creating added value for our customers by implementing modern technology in our work.",
        lists:["urgent transport solution","Reliable & experienced staffs","Reliable & experienced staffs","Urgent transport solutions"]
    },
    {
        id:2,
        img:"/blog2.png",
        day: '08',
        month: "september",
        title: "How technology can help redraw  the supply chain map",
        desc:"We are dedicated in creating added value for our customers by implementing modern technology in our work.",
        lists:["urgent transport solution","Reliable & experienced staffs","Reliable & experienced staffs","Urgent transport solutions"]
    },
    {
        id:3,
        img:"/blog.png",
        day: '08',
        month: "september",
        title: `Five things you should have ready for your broker`,
        desc:"We are dedicated in creating added value for our customers by implementing modern technology in our work.",
        lists:["urgent transport solution","Reliable & experienced staffs","Reliable & experienced staffs","Urgent transport solutions"]
    }
]

</script>
