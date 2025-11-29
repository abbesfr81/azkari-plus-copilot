import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-tasbih-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasbih-counter.html',
  styleUrl: './tasbih-counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasbihCounterComponent {
  private readonly settingsService = inject(SettingsService);

  protected readonly count = signal(0);
  protected readonly maxCount = signal(33);
  protected readonly language = this.settingsService.language;
  protected readonly vibrationEnabled = signal(true);

  constructor() {
    effect(() => {
      if (this.count() === this.maxCount()) {
        if (this.vibrationEnabled()) {
          navigator?.vibrate?.(200);
        }
      }
    });
  }

  protected increment(): void {
    this.count.update((count) => (count >= this.maxCount() ? 0 : count + 1));
  }

  protected reset(): void {
    this.count.set(0);
  }

  protected setMaxCount(value: number): void {
    this.maxCount.set(value);
    this.count.set(0);
  }

  protected toggleVibration(): void {
    this.vibrationEnabled.update((value) => !value);
  }
}
