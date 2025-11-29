import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  private readonly settingsService = inject(SettingsService);
  protected readonly language = this.settingsService.language;

  protected readonly languages: Array<{ value: 'ar' | 'fr'; label: string }> = [
    { value: 'ar', label: 'العربية' },
    { value: 'fr', label: 'Français' },
  ];

  protected setLanguage(value: 'ar' | 'fr'): void {
    this.settingsService.setLanguage(value);
    this.settingsService.setLanguage(value);
  }
}
