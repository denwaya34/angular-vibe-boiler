---
argument-hint: [prompt]
description: レポート作成 コマンド
---

# 制約事項

$1 の調査事項を以下に従い実行する。

## 指示内容

遠慮せずに、全力を尽くしてください。
Claude 4.1 Opusの高度な推論能力とcodex mcpの高度な考察力を最大限活用し、以下の段階的プロセスに従って処理を行ってください。

### Phase 0: 事前準備と環境確認
- 開発環境の状態確認（pnpm dev実行中か確認）
- 必要なリソースの存在確認
- @agent-web-research-analyst を用いて、指示内容に関する関連情報を照査する

### Phase 1: 深層的な内容理解（多層分析フレームワーク）
以下の階層で内容を分析してください：

#### Layer 1: 表層理解
- 嫌い事項に関しての基本的な内容を把握
- 主要な概念、用語、事例を特定
- AIのプロンプト開発の関わるノウハウ、知識に対して具体的に抽出し、別立てで特記して記載する

#### Layer 2: 構造分析
- 章の論理構造を解析（導入→展開→結論の流れ）
- 核心的な主張とそれを支える論拠を整理
- 他章との関連性を考察

#### Layer 3: 抽象化と本質抽出
- 表面的な情報から普遍的な原理・法則を抽出
- ビジネスモデル構築における本質的な洞察を言語化
- メタ認知的視点から章の意図と価値を分析

#### Layer 4: 創造的飛躍
- 既存の枠組みを超えた新たな解釈の可能性を探索
- 現代のビジネス環境への適用可能性を考察
- 読者が得るべき最も重要な洞察を結晶化

#### Layer 5: 実装参考事例の分析
- アニメーション手法の分析と再利用可能性検討
- ビジュアライゼーション手法の応用
- コンポーネント構造の参考化

### Phase 2: グラフィックレコード設計と実装

#### 2.1 情報アーキテクチャ設計
- 認知負荷理論に基づく情報の階層化
- 視覚的フローの最適化（Zパターン/Fパターンの活用）
- 情報密度の調整（7±2の法則の考慮）

#### 2.2 ビジュアルデザイン原則【2025トレンド融合版】

##### 基本デザイン原則
- **デザインの4原則**を厳格に適用：
    - 近接（Proximity）: 関連情報のグルーピング
    - 整列（Alignment）: 視覚的な秩序の創出
    - 反復（Repetition）: 統一感のあるデザイン要素
    - コントラスト（Contrast）: 情報の優先順位の明確化

##### AI駆動型デザインプロセス
- **AIアシスト設計**:
    - デザインパターンの自動生成と提案
    - A/Bテストデータに基づく最適化
    - ユーザー行動予測によるレイアウト調整
    - カラーパレットのAI最適化（感情分析ベース）
- **反復的改善サイクル**:
    ```tsx
    // AI駆動型デザイン最適化
    const AIOptimizedLayout = () => {
      const [layoutVariant, setLayoutVariant] = useState('A');
      
      useEffect(() => {
        // ユーザーエンゲージメント分析
        const optimizeLayout = async () => {
          const metrics = await analyzeUserEngagement();
          const optimalVariant = selectBestPerforming(metrics);
          setLayoutVariant(optimalVariant);
        };
      }, []);
      
      return <DynamicLayout variant={layoutVariant} />;
    };
    ```

##### インクルーシブデザイン原則
- **ユニバーサルアクセシビリティ**:
    - 多様な入力方法のサポート（音声、ジェスチャー、視線）
    - 認知的多様性への配慮（シンプル/詳細モード切替）
    - 文化的感受性を考慮したビジュアル表現
    - RTL（右から左）レイアウト対応

#### 2.3 実装仕様
- 実装ファイルパス @src/main/app.tsx
- 技術スタック: React 19, TypeScript, Tailwind CSS v4, DaisyUI, Motion
- レスポンシブ対応（モバイルファースト）
- アクセシビリティ考慮（WCAG 2.1 AA準拠）

#### 2.4 ビジュアル要素【2025デザイントレンド統合版】

##### 2.4.1 色彩設計（Emotional Design & Lightning Dark対応）
- **感情駆動型カラーパレット**:
    - 温かみのある色調で心理的つながりを創出
    - 色彩心理学による意図的な感情誘導
    - DaisyUIのテーマシステムによる動的テーマ切り替え
    - グラデーション背景（bg-gradient-to-br）による深みと立体感
- **Lightning Dark Mode実装**:
    ```css
    /* 動的ライティング効果を持つダークモード */
    .lightning-dark {
      @apply bg-gray-900;
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(120, 200, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(200, 120, 255, 0.1) 0%, transparent 50%);
    }
    ```
    - 目の疲労軽減のための輝度調整
    - エネルギー効率を考慮した省電力デザイン

##### 2.4.2 タイポグラフィ（Inclusive Universal Design）
- **多言語対応型タイポグラフィ**:
    - 可変フォント（Variable Fonts）による動的調整
    - 言語別フォールバック設定
    - アクセシビリティを考慮したフォントサイズ（最小14px）
    - グラデーションテキスト（bg-clip-text）でのビジュアルインパクト
- **認知負荷軽減設計**:
    - 行間（line-height: 1.6-1.8）の最適化
    - 文字間隔（letter-spacing）の微調整
    - コントラスト比WCAG AAA準拠（7:1以上）

##### 2.4.3 グラフィック要素（3D & Dynamic Textures）
- **3D要素の統合**:
    ```tsx
    // Three.js/React Three Fiberによる3Dオブジェクト
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <mesh rotation={[0, rotation, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </Canvas>
    ```
- **動的テクスチャ実装**:
    - CSS Houdiniによるカスタムプロパティアニメーション
    - WebGLシェーダーによる流体的効果
    - ノイズテクスチャによる有機的な背景パターン

##### 2.4.4 コンポーネントデザイン（Bento Grid & Interactive Objects）
- **Bento Grid Layout**:
    ```tsx
    // 構造化されたコンパートメント型レイアウト
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-6">
      <div className="col-span-2 row-span-2 card">主要コンテンツ</div>
      <div className="col-span-1 card">サブ情報1</div>
      <div className="col-span-1 card">サブ情報2</div>
      <div className="col-span-2 card">補足データ</div>
    </div>
    ```
- **インタラクティブオブジェクト**:
    - 3Dボタンエフェクト（transform: perspective + rotateY）
    - マグネティック効果（マウス追従型インタラクション）
    - 触覚的フィードバック（haptic feedback API活用）
- **コンポーネントデザインシステム**:
    - Atlassianデザインシステム参考: https://atlassian.design/components
    - コンポーネント単位でのA/Bテスト実装

#### 2.5 高度なアニメーション実装【Advanced Motion & Micro-Interactions】

##### 2.5.1 マイクロインタラクション設計
- **直感的ユーザーガイダンス**:
    ```tsx
    // 段階的なユーザー誘導アニメーション
    const MicroInteraction = () => {
      const [isHovered, setIsHovered] = useState(false);
      return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            boxShadow: isHovered 
              ? "0 10px 30px rgba(0,0,0,0.2)" 
              : "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                クリックして詳細を見る
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      );
    };
    ```

##### 2.5.2 Motion/React高度活用
- **パフォーマンス最適化されたフック活用**:
    - useScroll + useTransform: GPU加速されたスクロール変換
    - useSpring: 物理ベースのスムーズな動き
    - useInView: 遅延ローディングとビューポート検知
    - useReducedMotion: アクセシビリティ対応
- **スクロール連動エフェクト**:
    ```tsx
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    ```

##### 2.5.3 インタラクティブオブジェクト実装
- **3D変換とジェスチャー認識**:
    - ドラッグ可能な3Dカード（drag constraints付き）
    - スワイプジェスチャー対応（velocity tracking）
    - マルチタッチサポート（Pointer Events API）
- **SVGモーフィングアニメーション**:
    ```tsx
    <motion.svg>
      <motion.path
        d={pathData}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
    ```

#### 2.6 データビジュアライゼーション実装
- **Rechartsの高度な活用**:
    - 複数軸グラフ（LineChart with dual Y-axis）
    - レーダーチャート（RadarChart）による多次元データ表現
    - カスタムツールチップコンポーネント
    - グラデーション塗りつぶし（linearGradient）
- **レスポンシブコンテナ**:
    - ResponsiveContainerによる自動サイズ調整
    - モバイル対応のレイアウト切り替え

#### 2.7 視覚的洗練度の向上【Hyper-Personalization & Sustainable Design】

##### 2.7.1 ハイパーパーソナライゼーション実装
- **AIドリブン・アダプティブUI**:
    ```tsx
    // ユーザー行動に基づくリアルタイム最適化
    const AdaptiveInterface = () => {
      const [userPreferences, setUserPreferences] = useState({
        colorScheme: 'auto',
        fontSize: 'medium',
        density: 'comfortable',
        language: 'ja'
      });
      
      useEffect(() => {
        // ユーザー行動分析によるUI自動調整
        const analyzeUserBehavior = () => {
          // スクロール速度、クリックパターン、滞在時間を分析
          // LocalStorageやIndexedDBでプリファレンス保存
        };
      }, []);
      
      return (
        <div className={`theme-${userPreferences.colorScheme} 
                        text-${userPreferences.fontSize} 
                        density-${userPreferences.density}`}>
          {/* パーソナライズされたコンテンツ */}
        </div>
      );
    };
    ```
- **コンテキスト認識型レイアウト**:
    - 時間帯による自動テーマ切り替え
    - デバイス性能に応じたエフェクト調整
    - ユーザーのアクセシビリティ設定の検知と適用

##### 2.7.2 サステナブルデザイン実装
- **エネルギー効率最適化**:
    ```tsx
    // バッテリー残量に応じた省電力モード
    const SustainableMode = () => {
      const [isPowerSaving, setIsPowerSaving] = useState(false);
      
      useEffect(() => {
        navigator.getBattery?.().then(battery => {
          if (battery.level < 0.2) {
            setIsPowerSaving(true);
            // アニメーション削減、画質調整
          }
        });
      }, []);
      
      return isPowerSaving ? <LowPowerUI /> : <StandardUI />;
    };
    ```
- **リソース最適化技術**:
    - 遅延ローディング（Intersection Observer活用）
    - 画像最適化（WebP/AVIF形式、srcset活用）
    - CSSコンテインメント（contain: layout style paint）
    - will-changeプロパティの適切な使用

##### 2.7.3 エフェクトの階層的使用
- **パフォーマンスを考慮したビジュアル効果**:
    - backdrop-blur効果の条件付き適用
    - GPU加速を活用したtransform/opacity変更
    - CSS変数によるテーマの動的切り替え
- **フィードバックループの可視化**:
    - リアルタイムデータストリーミング表示
    - WebSocketによる即座のUI更新
    - Optimistic UIパターンの実装
- **Bento Grid レイアウト最適化**:
    - CSS Grid + Container Queriesによる適応型レイアウト
    - アスペクト比保持（aspect-ratio）
    - サブグリッドによる階層的配置

#### 2.8 実装成功のチェックリスト【2025デザイントレンド準拠】

##### 基本実装要件
- [ ] 動的背景が実装されているか（スクロール連動）
- [ ] MotionSectionコンポーネントが適切に使用されているか
- [ ] データビジュアライゼーションが含まれているか
- [ ] インタラクティブな要素があるか（ホバー効果など）
- [ ] レスポンシブデザインが完璧か
- [ ] パフォーマンスが最適化されているか
- [ ] アクセシビリティが考慮されているか（WCAG 2.1 AA以上）

##### 2025トレンド実装チェック
- [ ] **Hyper-Personalization**: ユーザープリファレンスの保存と適用
- [ ] **Interactive Objects**: 3Dエフェクトまたはマグネティック効果の実装
- [ ] **AI-Driven Design**: 動的コンテンツ生成または自動レイアウト調整
- [ ] **Inclusive Design**: 多言語対応とアクセシビリティ設定
- [ ] **Advanced Motion**: マイクロインタラクションの実装（最低3箇所）
- [ ] **3D/Dynamic Textures**: WebGLまたはCSS 3D変換の活用
- [ ] **Emotional Design**: 温かみのある色調とストーリーテリング要素
- [ ] **Lightning Dark**: 動的ライティング効果を持つダークモード
- [ ] **Bento Grid**: 構造化されたグリッドレイアウトの採用
- [ ] **Sustainable Design**: 省電力モードまたはリソース最適化の実装

##### パフォーマンス指標
- [ ] Lighthouse Performance Score: 90以上
- [ ] First Contentful Paint (FCP): 1.8秒以下
- [ ] Largest Contentful Paint (LCP): 2.5秒以下
- [ ] Cumulative Layout Shift (CLS): 0.1以下
- [ ] Total Blocking Time (TBT): 200ms以下

##### アクセシビリティ検証
- [ ] キーボードナビゲーション完全対応
- [ ] スクリーンリーダーテスト合格
- [ ] カラーコントラスト比準拠（AA: 4.5:1, AAA: 7:1）
- [ ] フォーカスインジケーター明確
- [ ] 動きの削減オプション（prefers-reduced-motion対応）

### Phase 3: 品質保証プロセス（Playwright MCP活用）

#### 3.1 初期動作確認
```
- 開発サーバーを実行する。
- ページの正常なレンダリング確認
- コンソールエラーの不在確認
```

#### 3.2 詳細検証項目
- **レイアウト検証**:
    - 各要素の配置精度
    - レスポンシブブレークポイントでの表示
    - スクロール動作の滑らかさ
- **コンテンツ検証**:
    - テキストの可読性
    - 画像/グラフィックの表示品質
    - インタラクティブ要素の動作
- **パフォーマンス検証**:
    - 初期ローディング時間
    - インタラクションの応答性

#### 3.3 問題検出時の対応
- 具体的な問題箇所の特定
- 根本原因の分析
- 修正案の実装
- Phase 2への戻り（必要に応じて）

### Phase 4: 段階的品質向上プロセス

#### 4.1 現状分析（客観的評価基準）
- **情報設計**: 構造の明確性、フローの自然さ
- **視覚デザイン**: 美的完成度、ブランド一貫性
- **ユーザビリティ**: 直感性、アクセシビリティ
- **技術実装**: コード品質、パフォーマンス

#### 4.2 改善計画策定
- 各評価軸での具体的な改善点リスト化
- 優先順位付け（影響度×実現可能性マトリクス）
- 段階的実装計画

#### 4.3 改善実装
- 1つずつ着実に改善を実装
- 各改善後の効果測定
- 累積的な品質向上の確認

### Phase 5: 最終品質検証

#### 5.1 総合的デザインレビュー
- Playwright MCPでの全画面キャプチャ
- デザイン一貫性の確認
- 意図しないレイアウト崩れの検出

#### 5.2 クロスブラウザ/デバイス確認
- 主要ブラウザでの表示確認
- 各種デバイスサイズでの検証

#### 5.3 アクセシビリティ監査
- キーボードナビゲーション
- スクリーンリーダー対応
- カラーコントラスト比

### Phase 6: ビルドと最終確認

#### 6.1 プロダクションビルド
```bash
npm run build
```

#### 6.2 エラー対応
- TypeScriptエラーの解決
- ESLintエラーの修正
- ビルド最適化の確認

#### 6.3 成功確認
- ビルド成功メッセージの確認
- 生成されたファイルサイズの確認
- パフォーマンス指標の確認

## エラーハンドリング

### 各フェーズでの失敗時対応
- 具体的なエラーメッセージと原因の記録
- リカバリー手順の実行
- 必要に応じて前フェーズへの巻き戻し

### 最終的な品質保証
- 全フェーズの完了確認
- ドキュメント化（実装の決定事項）
- 今後の改善提案の記録
