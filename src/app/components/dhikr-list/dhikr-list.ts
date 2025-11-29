import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdhkarService } from '../../services/adhkar';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-dhikr-list',
  templateUrl: './dhikr-list.html',
  styleUrl: './dhikr-list.scss',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DhikrListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly adhkarService = inject(AdhkarService);
  private readonly settingsService = inject(SettingsService);

  protected readonly language = this.settingsService.language;

  protected readonly category = computed(() => this.route.snapshot.data['category'] as string);

  constructor() {
    // Set initial category
    this.adhkarService.setCategory(this.route.snapshot.data['category'] as string);
  }

  protected readonly adhkarList = computed(() => this.adhkarService.filteredAdhkar());

  protected readonly isFavorite = (id: string) => this.adhkarService.isFavorite(id);

  protected toggleFavorite(id: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.adhkarService.toggleFavorite(id);
  }
}
