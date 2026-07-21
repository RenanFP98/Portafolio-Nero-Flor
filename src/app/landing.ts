import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col md:flex-row w-full h-screen overflow-hidden font-sans select-none bg-black">
      <!-- FEMALE ARTIST SECTION -->
      <a 
        routerLink="/artist/female"
        class="relative flex-1 bg-[#F9A8D4] flex flex-col justify-between p-8 md:p-12 group hover:grow-[1.2] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden"
        style="view-transition-name: female-section;"
      >
        <div class="flex justify-between items-start">
          <span class="text-pink-900 text-xs font-bold tracking-[0.4em] uppercase">Portfolio 01</span>
          <div class="h-px w-24 md:w-32 bg-pink-900 mt-2 opacity-30 group-hover:w-48 transition-all duration-700"></div>
        </div>
        
        <div class="relative z-10 transform group-hover:translate-x-4 transition-transform duration-700">
          <h1 class="text-[80px] md:text-[120px] font-serif leading-[0.8] text-pink-900 mix-blend-multiply italic">
            Elena<br/>Rose
          </h1>
          <p class="mt-8 max-w-xs text-pink-950 font-medium text-base md:text-lg leading-snug">
            Vibrant and fluid compositions specializing in abstract and floral storytelling.
          </p>
        </div>

        <div class="flex items-end gap-4 md:gap-8 z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
          <div class="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-pink-900 text-pink-900 group-hover:bg-pink-900 group-hover:text-white transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:animate-bounce">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-pink-900 text-[10px] uppercase tracking-widest font-bold">Style</span>
            <span class="text-pink-950 font-serif italic text-lg md:text-xl">Abstract Floral</span>
          </div>
        </div>
        
        <!-- Background Ornament -->
        <div class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
          <span class="text-[200px] md:text-[300px] font-serif leading-none italic">♀</span>
        </div>
      </a>

      <!-- MALE ARTIST SECTION -->
      <a 
        routerLink="/artist/male"
        class="relative flex-1 bg-[#000000] flex flex-col justify-between p-8 md:p-12 overflow-hidden border-t md:border-t-0 md:border-l border-white/10 group hover:grow-[1.2] transition-all duration-700 ease-in-out cursor-pointer"
        style="view-transition-name: male-section;"
      >
        <!-- Red Diagonal Background Slicing -->
        <div class="absolute inset-0 bg-red-900 opacity-20 transform -skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000"></div>

        <div class="flex justify-between items-start relative z-10">
          <div class="h-px w-24 md:w-32 bg-red-600 mt-2 group-hover:w-48 transition-all duration-700"></div>
          <span class="text-red-600 text-xs font-bold tracking-[0.4em] uppercase">Portfolio 02</span>
        </div>

        <div class="relative z-10 text-right self-end transform group-hover:-translate-x-4 transition-transform duration-700">
          <h1 class="text-[80px] md:text-[120px] font-black leading-[0.8] text-white tracking-tighter uppercase">
            Marcus<br/><span class="text-red-600">Vance</span>
          </h1>
          <p class="mt-8 max-w-xs text-zinc-400 font-medium text-base md:text-lg leading-snug ml-auto">
            Abstract expressionism through aggressive textures and high-contrast geometry.
          </p>
        </div>

        <div class="flex items-end justify-between relative z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
           <div class="flex flex-col text-left">
            <span class="text-red-600 text-[10px] uppercase tracking-widest font-bold">Pricing</span>
            <span class="text-white font-mono text-lg md:text-xl">FROM $200 USD</span>
          </div>
          <div class="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-red-600 text-red-600 group-hover:bg-red-600 group-hover:text-black transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:animate-bounce">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>

        <!-- Background Ornament -->
        <div class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
          <span class="text-[200px] md:text-[300px] font-black leading-none uppercase">♂</span>
        </div>
      </a>

      <!-- Central Branding Overlay -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block group-hover:scale-105 transition-transform duration-700">
        <div class="bg-white px-6 py-2 border-4 border-black rotate-[-5deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span class="text-2xl font-black uppercase tracking-tighter italic">DUAL ARTISTRY</span>
        </div>
      </div>
    </div>
  `
})
export class Landing {}
