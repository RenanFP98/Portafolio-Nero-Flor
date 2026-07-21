import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {ARTISTS} from './data';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (artist()) {
      <div 
        class="min-h-screen w-full transition-colors duration-1000"
        [class]="artist()!.theme.bgClass + ' ' + artist()!.theme.textClass + ' ' + artist()!.theme.fontClass"
      >
        <!-- Header / Navigation -->
        <header class="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference text-white">
          <a routerLink="/" class="inline-flex items-center gap-2 hover:opacity-70 transition-opacity uppercase tracking-widest text-sm font-sans font-medium">
            <mat-icon>arrow_back</mat-icon>
            Back to Home
          </a>
        </header>

        <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32">
          
          <!-- Hero Section -->
          <section class="flex flex-col items-center text-center mt-12 md:mt-24 reveal-on-scroll">
            <h1 class="text-7xl md:text-9xl mb-6 tracking-tighter" [class]="artist()!.id === 'male' ? 'font-cinzel drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]' : ''">
              {{ artist()!.name }}
            </h1>
            <p class="text-2xl md:text-4xl opacity-80 max-w-3xl leading-relaxed" [class]="artist()!.id === 'female' ? 'italic' : 'uppercase tracking-widest'">
              {{ artist()!.shortDescription }}
            </p>
          </section>

          <!-- Information & Style -->
          <section class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center reveal-on-scroll">
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-4 text-sm uppercase tracking-widest opacity-60">
                <div class="w-12 h-[1px] bg-current"></div>
                <span>About the Artist</span>
              </div>
              <h2 class="text-4xl md:text-5xl leading-tight">The Vision & <br/> <span [class]="artist()!.theme.accentClass">The Craft</span></h2>
              <p class="text-lg md:text-xl leading-relaxed opacity-80">
                {{ artist()!.fullInformation }}
              </p>
            </div>
            
            <div class="p-8 md:p-12 rounded-3xl" [class]="artist()!.theme.cardBgClass">
              <mat-icon class="text-5xl mb-6 opacity-50" [class]="artist()!.theme.accentClass">palette</mat-icon>
              <h3 class="text-3xl mb-4">Signature Style</h3>
              <p class="text-lg leading-relaxed opacity-80">
                {{ artist()!.styleDescription }}
              </p>
            </div>
          </section>

          <!-- Portfolio / Artworks -->
          <section class="flex flex-col gap-12 reveal-on-scroll">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl md:text-5xl">Selected Works</h2>
              <div class="hidden md:flex items-center gap-4 text-sm uppercase tracking-widest opacity-60">
                <span>Scroll to explore</span>
                <mat-icon>arrow_downward</mat-icon>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              @for (art of artist()!.portfolio; track art.id; let i = $index) {
                <div 
                  class="group flex flex-col gap-6" 
                  [class.md:mt-24]="i % 2 !== 0"
                >
                  <div class="relative overflow-hidden rounded-2xl aspect-[4/5] w-full">
                    <img 
                      [src]="art.imageUrl" 
                      [alt]="art.title"
                      class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      referrerpolicy="no-referrer"
                    />
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl mb-2">{{ art.title }}</h3>
                    <p class="opacity-70 text-lg">{{ art.description }}</p>
                  </div>
                </div>
              }
            </div>
          </section>

          <!-- Pricing / Services -->
          <section class="flex flex-col gap-16 pb-24 reveal-on-scroll">
            <div class="text-center flex flex-col items-center">
              <h2 class="text-4xl md:text-5xl mb-6">Commissions & Services</h2>
              <p class="text-xl opacity-70 max-w-2xl">Bring the vision to your own space. Explore available options for custom and licensed works.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              @for (price of artist()!.pricing; track price.service) {
                <div 
                  class="p-8 md:p-10 rounded-3xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-500" 
                  [class]="artist()!.theme.cardBgClass"
                >
                  <h3 class="text-2xl mb-4 flex-1">{{ price.service }}</h3>
                  <p class="text-lg opacity-70 mb-8">{{ price.description }}</p>
                  <div class="flex items-center justify-between mt-auto">
                    <span class="text-3xl font-bold" [class]="artist()!.theme.accentClass">{{ price.price }}</span>
                    <button class="p-4 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity bg-current text-white mix-blend-difference">
                      <mat-icon>arrow_forward</mat-icon>
                    </button>
                  </div>
                </div>
              }
            </div>
          </section>

        </main>
      </div>
    }
  `,
  styles: [`
    /* Using CSS animations for reveal-on-scroll since Angular zoneless with motion library can sometimes need extra setup */
    .reveal-on-scroll {
      animation: fadeUp 1s ease-out forwards;
      animation-timeline: view();
      animation-range: entry 10% cover 30%;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Fallback if animation-timeline is not supported (most modern Chrome supports it) */
    @supports not (animation-timeline: view()) {
      .reveal-on-scroll {
        animation: simpleFadeUp 1s ease-out forwards;
      }
      @keyframes simpleFadeUp {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
      }
    }
  `]
})
export class Portfolio {
  private route = inject(ActivatedRoute);
  
  artistId = toSignal(
    this.route.paramMap.pipe(map(params => params.get('id')))
  );

  artist = computed(() => {
    const id = this.artistId();
    if (!id) return null;
    return ARTISTS[id] || null;
  });
}
