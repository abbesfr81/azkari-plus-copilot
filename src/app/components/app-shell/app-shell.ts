import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  protected readonly currentLanguage = signal<'ar' | 'fr'>('ar');
  protected readonly navItems = [
    { path: '/home', icon: 'home', labelAr: 'الرئيسية', labelFr: 'Accueil' },
    { path: '/morning', icon: 'sun', labelAr: 'أذكار الصباح', labelFr: 'Matin' },
    { path: '/evening', icon: 'moon', labelAr: 'أذكار المساء', labelFr: 'Soir' },
    { path: '/prayer', icon: 'pray', labelAr: 'بعد الصلاة', labelFr: 'Prière' },
    { path: '/favorites', icon: 'heart', labelAr: 'المفضلة', labelFr: 'Favoris' },
    { path: '/tasbih', icon: 'beads', labelAr: 'المسبحة', labelFr: 'Tasbih' },
    { path: '/settings', icon: 'settings', labelAr: 'الإعدادات', labelFr: 'Paramètres' },
  ];

  toggleLanguage(): void {
    this.currentLanguage.update((lang) => (lang === 'ar' ? 'fr' : 'ar'));
  }
}
