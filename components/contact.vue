 <template>
    <div class="min-h-[500px] flex flex-col justify-center py-10 ">
        <div class="flex justify-start items-start">
            <span class="text-xs border-l-2 px-2 py-1 border-[#FFB629] bg-gray-500 text-white ">Contact Us</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <h1 class="text-gray-50 font-bold text-2xl my-1">Get in touch with us</h1>
                <p class="text-gray-400">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
                </p>
                <div class="flex flex-col   text-[9px] md:w-[50%] leading-tight">
                    <div class="flex justify-start items-center my-3 ">
                        <div class="p-1.5 bg-transparent border border-[#FFBE34] rounded-full text-[#FFBE34] inline-flex justify-center items-center mr-1">
                            <Icon name="material-symbols:nest-clock-farsight-analog-outline" size="14"/>
                        </div>
                       
                        <span class="text-gray-200">
                            Mon - Sat 9.00 - 18.00 <br>Sunday Closed
                        </span>
                    </div>
                    <div class="flex justify-start items-center my-3">
                        <div class="p-1.5 bg-transparent border border-[#FFBE34] rounded-full  text-[#FFBE34] inline-flex justify-center items-center mr-1">
                            <Icon name="material-symbols:mail-outline" size="13"/>
                        </div>
                       
                        <span class="text-gray-200">
                            email <br>contacts@logistics.com                        
                        </span>
                    </div>
                    <div class="flex justify-start items-center my-3">
                        <div class="p-1.5 bg-transparent border border-[#FFBE34] rounded-full text-[#FFBE34] inline-flex justify-center items-center mr-1">
                            <Icon name="material-symbols:call" size="14"/>
                        </div>
                      
                        <span class="text-gray-200">
                            call us <br> 08167607945
                        </span>
                    </div>
                </div>
            </div>


            <div class=" md:col-span-2">
                 <form class="grid grid-cols-2 grid-rows-4  md:grid-rows-5 gap-2 md:gap-5 text-white ">
                        <input type="text" placeholder="Your name" class="bg-transparent  border border-gray-400 rounded  outline-none">
                        <input type="email" placeholder="Email" class="bg-transparent  border border-gray-400 capitalize rounded  outline-none">
                

                        <input type="text" placeholder="Phone number" class="bg-transparent  border border-gray-400 rounded  outline-none">
                        <input type="text" placeholder="City" class="bg-transparent border  border-gray-400  rounded  outline-none">

                        <textarea  placeholder="Your Message" class="col-span-2 row-span-2 bg-transparent  border border-gray-400  rounded  outline-none"></textarea>
                        <div class="w-full">
                               <button type="submit" class=" py-3 px-2 rounded  bg-gradient-to-r from-[#FFB629]
                                via-[#FFDA56] to-[#f5e6a1] text-black text-xs capitalize font-medium">submit message</button>
                        </div>
                 </form>
            </div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 mt-10">
            <img src="/gallery.png" >
            <img src="/gallery1.png">
            <img src="/gallery2.png">
            <img src="/gallery3.png">
        </div>
    </div>
</template>