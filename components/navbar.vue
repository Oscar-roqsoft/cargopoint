<template>
    <div>
        <nav class="bg-blue-800 md:bg-transparent  text-white z-40  border-gray-200  fixed md:top-[60px] top-0 w-full h-[56px] px-4">

          <div class="max-w-[1150px] mx-auto  flex z-40  flex-wrap items-center justify-between w-full h-full ">
            
              
              <a href="#" class="flex justify-center items-center h-full md:hidden z-30">
                  <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
                  <span class="self-center text-2xl font-semibold whitespace-nowrap ">CargoPoint</span>
              </a>


              <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex z-40 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>


              <div  class=" hidden bg-blue-800  md:bg-transparent  fixed -z-0 md:relative md:top-0 top-[58px]  left-0  w-full border md:border-0 rounded   
               md:flex md:justify-center md:items-center md:w-auto animate__animated  animate__slideInDown" id="navbar-dropdown">
                <ul v-for="item in navItems " :key="item" 
                  class=" flex flex-col w-full  md:mr-5 lg:mr-10 py-2 md:items-center font-medium  md:py-0  text-lg border-gray-100
                   md:flex-row md:space-x-8 md:mt-0  md:border-0"
                   >

                    <li  @click="showNav=item.title" >

                      <button id="dropdownNavbarLink" :data-dropdown-toggle="item.id===3?'dropdownNavbar':''" class="flex  capitalize  items-center justify-between
                       w-full py-2 pl-3 pr-4 rounded hover:bg-[#FFB629] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                        md:w-auto "
                        :class="showNav===item.title?'bg-[#FFB629] md:bg-transparent md:text-blue-700':''">{{ item.title }} <svg class="w-2.5 h-2.5 ml-2.5"
                          :class="item.id===3?'flex':'hidden'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                          </svg>
                      </button>


                      <!-- Dropdown menu -->
                      <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44
                        ">
                        <ul class=" text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                          <li class="">
                            <a href="#" class="block px-4 py-2 hover:bg-blue-700 rounded-t-lg hover:text-gray-100 ">Dashboard</a>
                          </li >
                          <li class="">
                            <a href="#" class="block px-4 py-2 hover:bg-blue-700 hover:text-gray-100 ">Settings</a>
                          </li>
                          <li class="">
                            <a href="#" class="block px-4 py-2 hover:bg-blue-700  hover:text-gray-100 ">Earnings</a>
                          </li>
                        </ul>
                        <div class="py-1 hover:bg-blue-700 rounded-b-lg">
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700   hover:text-gray-100 ">Sign out</a>
                        </div>
                      </div>
 
                    </li>

                  </ul>
              </div>


                <div  class=" justify-center items-center hidden md:block ">
                    <di v class="p-2  rounded-full text- inline-flex justify-center items-center mr-1">
                        <Icon name="uil:instagram"/>
                    </di>
                    <div class="p-2  rounded-full text- inline-flex justify-center items-center mr-1">
                        <Icon name="uil:facebook"/>
                    </div>
                    <div class="p-2  rounded-full text- inline-flex justify-center items-center mr-1">
                        <Icon name="uil:twitter"/>
                    </div>
                    <div class="p-2  rounded-full text- inline-flex justify-center items-center mr-1">
                        <Icon name="uil:linkedin"/>
                    </div>
                </div>
                  
                <div class=" bg-white text-gray-950 h-full hidden md:flex justify-center items-center text-xs font-medium p-2 capitalize">
                    <span>request quote</span>
                </div>
            </div>
          </nav>

          <div class="bg-[#091242] opacity-70 text-white z-30  border-gray-200  fixed md:top-[60px] top-0 w-full h-[56px] px-4"></div>
    </div>
</template>


<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import 'animate.css'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})



const isVisible = ref(true)

const toggleVisible=()=>{
  isVisible.value =!isVisible.value
}

const showNav = ref("home")


const navItems = [
    {
        id:1,
        title:"home",
    },
    {
        id:2, 
        title:"about",
    },
    {    
        id:3,
        title:"pages",
        dropdownitems:["page1","pages2","pages3","pages4"]
     },
     {
        id:4, 
        title:"project",
    },
     {
        id:5 , 
        title:"contact",
    }
]
</script>