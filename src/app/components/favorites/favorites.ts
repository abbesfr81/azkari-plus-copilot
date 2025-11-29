import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdhkarService } from '../../services/adhkar';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  private readonly adhkarService = inject(AdhkarService);
  private readonly settingsService = inject(SettingsService);

  protected readonly language = this.settingsService.language;

  protected readonly favorites = computed(() =>
    this.adhkarService.adhkarList().filter((dhikr) => this.adhkarService.isFavorite(dhikr.id))
  );

  protected toggleFavorite(id: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.adhkarService.toggleFavorite(id);
  }
}
