// Home View Component

export function HomeView() {
    return `
    <div class="flex flex-col items-center justify-center min-h-[80vh] text-center w-full animate-fade-up">
        
        <!-- Decorative subtle elements -->
        <div class="relative w-full max-w-lg mb-8 delay-100 flex justify-center">
            <div class="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 scale-150"></div>
            
            <!-- A subtle heart icon placeholder that looks elegant -->
            <div class="w-16 h-16 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm border border-white flex items-center justify-center relative z-10 rotate-12 transition-transform hover:rotate-0 hover:scale-110 duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </div>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300 mb-6 drop-shadow-sm delay-200" style="opacity:0; animation: fadeUp 0.8s forwards 200ms;">
            Just For You
        </h1>
        
        <p class="text-xl md:text-2xl text-blue-50 font-light text-shadow-lg max-w-2xl leading-relaxed mb-10 delay-300" style="opacity:0; animation: fadeUp 0.8s forwards 300ms;">
            I wanted to create something more permanent than a photo album—a little corner of the digital universe where our memories can just peacefully exist, floating outside of time.

        <!-- A soft divider line -->
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full mb-12 delay-400" style="opacity:0; animation: fadeUp 0.8s forwards 400ms;"></div>
        
        <div class="bg-gradient-to-r from-blue-600/40 to-blue-400/40 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgb(0,0,0,0.03)] border border-white/60 max-w-3xl w-full delay-500" style="opacity:0; animation: fadeUp 0.8s forwards 500ms;">
            <p class="text-lg text-white italic font-medium">
                "Every time I look at this, I fall in love all over again."
            </p>
        </div>
    </div>
    `;
}
