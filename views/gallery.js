// Standard Gallery View Component

export function GalleryView() {
    return `
    <div class="w-full animate-fade-up">
        <header class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-blue-100 mb-4 inline-block relative">
                Captured Moments
                <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full"></div>
            </h2>
            <p class="text-blue-50 max-w-xl mx-auto mt-6">A collection of beautiful memories and snapshots.</p>
        </header>

        <!-- Masonry-style CSS Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            <!-- Image Card 1 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 delay-100" style="opacity:0; animation: fadeUp 0.8s forwards 100ms;">
                <div class="absolute inset-0 bg-blue-200/50 animate-pulse -z-10"></div>
                <!-- We use placeholder images since the images folder was empty -->
                <img src="./images/2.jpg" 
                     alt="Memory 1" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 2 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-200" style="opacity:0; animation: fadeUp 0.8s forwards 200ms;">
                <div class="absolute inset-0 bg-blue-300/50 animate-pulse -z-10"></div>
                <img src="./images/3.jpg" 
                     alt="Memory 2" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 3 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 delay-300" style="opacity:0; animation: fadeUp 0.8s forwards 300ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/4.jpg" 
                     alt="Memory 3" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

             <!-- Image Card 4 -->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/5.jpg" 
                     alt="Memory 4" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 5 -->
            <div class="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:col-span-2 md:col-span-1 shadow-sm hover:shadow-xl transition-all duration-500 delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/6.jpg" 
                     alt="Memory 5" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>

            <!-- Image Card 6-->
             <div class="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;">
                <div class="absolute inset-0 bg-blue-100/50 animate-pulse -z-10"></div>
                <img src="./images/1.jpg" 
                     alt="Memory 6" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            </div>
            
        </div>
        
        <!-- Bottom spacing for the floating nav -->
        <div class="h-24"></div>
    </div>
    `;
}
