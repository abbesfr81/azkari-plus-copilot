import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdhkarService } from '../../services/adhkar';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-dhikr-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dhikr-detail.html',
  styleUrl: './dhikr-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DhikrDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly adhkarService = inject(AdhkarService);
  private readonly settingsService = inject(SettingsService);

  protected readonly language = this.settingsService.language;

  private readonly id = computed(() => this.route.snapshot.paramMap.get('id') ?? '');

  protected readonly dhikr = computed(() =>
    this.adhkarService.adhkarList().find((d) => d.id === this.id())
  );

  protected readonly isFavorite = computed(() => this.adhkarService.isFavorite(this.id()));

  protected toggleFavorite(): void {
    this.adhkarService.toggleFavorite(this.id());
  }
}
