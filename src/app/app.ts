import { Component, signal, computed, effect, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full w-full',
  },
})
export class App {
  protected readonly title = signal('スクラム開発の本質：理想と現実の架橋');
  protected readonly activeSection = signal(0);
  protected readonly scrollProgress = signal(0);
  protected readonly isDarkMode = signal(false);
  protected readonly showDetails = signal<Record<string, boolean>>({});
  
  // スクラムレポートのデータ構造
  protected readonly scrumData = signal({
    failureRate: 47,
    criticalRisk: 75,
    productivityGain: 55,
    japanUAI: 92,
    
    keyInsights: [
      {
        id: 'structure',
        title: '構造的矛盾',
        icon: '⚡',
        value: '47%',
        label: '失敗率',
        description: 'フレームワークの問題ではなく組織OSの不整合',
        color: 'error',
      },
      {
        id: 'culture',
        title: '文化的障壁',
        icon: '🗾',
        value: '92',
        label: 'UAI指数',
        description: '日本の不確実性回避とスクラムの実験主義の対立',
        color: 'warning',
      },
      {
        id: 'ai',
        title: 'AI革新',
        icon: '🤖',
        value: '55%',
        label: '生産性向上',
        description: 'AIは加速装置、方向性は人間が決める',
        color: 'success',
      },
      {
        id: 'solution',
        title: '解決策',
        icon: '🎯',
        value: '3層',
        label: '運営モデル',
        description: '日次自己管理・週次整合・月次調整',
        color: 'primary',
      },
    ],
    
    phases: [
      {
        title: '基盤整備',
        duration: '3ヶ月',
        items: ['権限委任表作成', 'WIP半減', '無過失ポストモーテム'],
      },
      {
        title: '構造改革',
        duration: '6ヶ月',
        items: ['評価制度改革', '可逆的実験', '心理的安全性'],
      },
      {
        title: '文化変革',
        duration: '12ヶ月',
        items: ['失敗から学ぶ', '自律的意思決定', '継続的改善'],
      },
    ],
    
    principles: [
      { name: '透明性', value: 85, description: '情報の可視化' },
      { name: '検査', value: 70, description: '定期的な評価' },
      { name: '適応', value: 60, description: '柔軟な変更' },
    ],
  });
  
  protected readonly currentPhase = computed(() => {
    const section = this.activeSection();
    return section < this.scrumData().phases.length 
      ? this.scrumData().phases[section] 
      : this.scrumData().phases[0];
  });
  
  constructor() {
    // スクロール進捗の追跡
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((scrollTop / docHeight) * 100, 100);
        this.scrollProgress.set(progress);
      });
    }
    
    // テーマの自動切り替え（時間帯による）
    effect(() => {
      const hour = new Date().getHours();
      const shouldBeDark = hour >= 19 || hour < 6;
      if (this.isDarkMode() !== shouldBeDark) {
        this.isDarkMode.set(shouldBeDark);
      }
    });
  }
  
  toggleSection(sectionId: string): void {
    this.showDetails.update(details => ({
      ...details,
      [sectionId]: !details[sectionId]
    }));
  }
  
  navigateToSection(index: number): void {
    this.activeSection.set(index);
    const element = document.getElementById(`section-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  
  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
    document.documentElement.setAttribute('data-theme', this.isDarkMode() ? 'dark' : 'light');
  }
}
