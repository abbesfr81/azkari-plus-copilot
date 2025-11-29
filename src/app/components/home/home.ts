import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly settingsService = inject(SettingsService);
  protected readonly language = this.settingsService.language;

  protected readonly categories = [
    {
      path: '/morning',
      iconAr: '☀️',
      iconFr: '☀️',
      labelAr: 'أذكار الصباح',
      labelFr: 'Invocations du matin',
    },
    {
      path: '/evening',
      iconAr: '🌙',
      iconFr: '🌙',
      labelAr: 'أذكار المساء',
      labelFr: 'Invocations du soir',
    },
    {
      path: '/prayer',
      iconAr: '🤲',
      iconFr: '🤲',
      labelAr: 'أذكار بعد الصلاة',
      labelFr: 'Après la prière',
    },
    {
      path: '/sleep',
      iconAr: '💤',
      iconFr: '💤',
      labelAr: 'أذكار النوم',
      labelFr: 'Avant de dormir',
    },
    { path: '/wake', iconAr: '⏰', iconFr: '⏰', labelAr: 'أذكار الاستيقاظ', labelFr: 'Au réveil' },
  ];
}
