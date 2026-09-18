/**
 * Single source of truth for every piece of content on the site.
 * Previously split between `data.json` and this file; unified so that
 * each entry is typed and can be rendered consistently.
 */

export type Profile = {
  name: string;
  nameLatin: string;
  role: string;
  base: string;
  education: string;
  major: string;
  stack: string[];
  interests: string[];
  bio: string[];
  links: { label: string; href: string }[];
};

export type CareerEntry = {
  company: string;
  /** `YYYY-MM` */
  start: string;
  /** `YYYY-MM`, or `null` while ongoing */
  end: string | null;
  /** Position held — the spine of the career narrative */
  role: string;
  summary: string;
  details: string;
  stack: string[];
  /** Engineering team size, when it is known */
  team?: string;
};

export type Work = {
  title: string;
  year: string;
  role: string;
  content: string;
  stack: string[];
  link: string;
};

export const profile: Profile = {
  name: '菊地 昇平',
  nameLatin: 'Shohei Kikuchi',
  role: 'フロントエンドエンジニア',
  base: '東京',
  education: '東京理科大学 理学部第二部 数学科',
  major: '離散数学',
  stack: ['TypeScript', 'React', 'Next.js', 'Panda CSS', 'Tailwind CSS', 'Storybook'],
  interests: ['お酒', 'ゲーム', 'アニメ', '麻雀', '温泉', 'ダイビング', 'スキー'],
  bio: [
    '理科大数学科卒のエンジニア。在学時代の専攻は離散数学。',
    '在学中に友人のフロントエンドエンジニアを師として、独学で勉強を進め、ホームページ作成の実務を経験。',
    'その後、インターンのフロントエンドエンジニアとしてWEBサービスの開発に従事。',
    'TypeScript, React, Next.js 等のモダンな技術を中心に日々勉強中。',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/skikuchi7329' },
    { label: 'X', href: 'https://twitter.com/skikuchi7329' },
  ],
};

export const career: CareerEntry[] = [
  {
    company: '株式会社 EFGTechnologies',
    start: '2021-04',
    end: '2021-06',
    role: 'マークアップコーダー',
    summary: '英会話Weblioのホームページリニューアル',
    details:
      'フロントエンドエンジニアである友人の紹介で受けた初めての実務案件。開発チームは6人で、私はマークアップコーダーとして pug, SCSS, JavaScript を使用してマークアップを行いました。',
    stack: ['pug', 'SCSS', 'JavaScript'],
    team: '6名',
  },
  {
    company: '合同会社じれったい',
    start: '2022-07',
    end: '2022-12',
    role: 'フロントエンド',
    summary: '会社ホームページの作成',
    details:
      'フロントエンドエンジニアである友人の紹介で参加させてもらった合同会社。様々な分野で活躍するエンジニアやデザイナーが集まっていて刺激を受ける。React を使用して、ホームページの作成を手伝った。',
    stack: ['React', 'styled-components'],
  },
  {
    company: '株式会社co-nect',
    start: '2023-04',
    end: '2024-04',
    role: 'フロントエンド',
    summary: 'Shopify テーマの実装',
    details:
      '株式会社EFGのつながりで受けた案件。Shopify のホームページ作成がメインで、CSS や JavaScript を使用したテーマの編集や、Liquid を使ったセクションの作成を行った。',
    stack: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
  },
  {
    company: '株式会社天久保',
    start: '2023-10',
    end: null,
    role: 'フロントエンド',
    summary: 'WordPress 自作テーマの作成・環境構築',
    details: 'WordPress を主に使用した、自作テーマの作成、環境構築。',
    stack: ['WordPress', 'PHP', 'JavaScript'],
  },
  {
    company: '株式会社STORY',
    start: '2024-06',
    end: '2025-02',
    role: 'フロントエンド',
    summary: '中学受験コベツバの開発',
    details:
      '少数精鋭のエンジニアチーム。フロントエンドエンジニアとして各ページの実装、テストコードの実装を行う。言語は Next.js + TypeScript で、フロントエンド先行の開発では msw と Storybook を使用して開発を行った。',
    stack: ['Next.js', 'TypeScript', 'msw', 'Storybook'],
    team: '5〜8名',
  },
  {
    company: '株式会社Hakky',
    start: '2025-02',
    end: null,
    role: 'フロントエンド',
    summary: 'Hakky Handbook の Next.js 移行・保守運用・新規機能開発',
    details:
      'フロントエンドエンジニアチームの一員として各ページの実装、保守・運用、GA4 + Clarity の導入、各コンポーネントの実装、チーム運営等々を担当。開発環境は Next.js + TypeScript + Panda CSS + Strapi。',
    stack: ['Next.js', 'TypeScript', 'Panda CSS', 'Strapi'],
    team: '10名',
  },
  {
    company: '株式会社ルートチーム',
    start: '2025-05',
    end: null,
    role: '設計〜実装リード',
    summary: 'One Stream の新規機能開発',
    details:
      'ワークフロー機能への新しいトリガー・アクションの追加、新規エンティティ「記事配信機能」を設計から実装までリーダーとして担当。新人へのキャッチアップ支援、随時バグ修正等々。開発環境は Next.js + TypeScript。',
    stack: ['Next.js', 'TypeScript'],
    team: '15名',
  },
];

export const works: Work[] = [
  {
    title: 'One Stream',
    year: '2025',
    role: '設計 / 実装リード',
    content:
      'ワークフロー機能への新規トリガー・アクションの追加と、新規エンティティ「記事配信機能」の設計から実装までをリーダーとして担当。',
    stack: ['Next.js', 'TypeScript'],
    link: '',
  },
  {
    title: 'Hakky Handbook',
    year: '2025',
    role: 'フロントエンド',
    content: 'Next.js への移行と保守・運用、コンポーネント実装、GA4 + Clarity の導入までを担当。',
    stack: ['Next.js', 'TypeScript', 'Panda CSS', 'Strapi'],
    link: '',
  },
  {
    title: 'スロシミュ',
    year: '2024',
    role: '個人開発',
    content:
      '実在するスロットマシーン（回胴式遊技機）のシミュレーションができる WEB アプリ。趣味で開発。',
    stack: ['React', 'TypeScript'],
    link: 'https://slot-simulator.vercel.app/',
  },
  {
    title: 'jirettai.com',
    year: '2022',
    role: 'フロントエンド',
    content: '合同会社じれったいのコーポレートサイト。フロントエンドの実装を担当。',
    stack: ['React', 'styled-components'],
    link: 'https://jirettai.com/',
  },
  {
    title: 'Weblio英会話 LP',
    year: '2021',
    role: 'マークアップ',
    content: '初めての実務案件。6人の開発チームでマークアップを担当した。',
    stack: ['pug', 'SCSS', 'JavaScript'],
    link: 'https://eikaiwa.weblio.jp/',
  },
  {
    title: 'This site',
    year: '2025',
    role: '個人開発',
    content: 'このポートフォリオサイト。2025.03 に Next 13 から Next 15（App Router）へ移行済み。',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/skikuchi7329/portfolio',
  },
];
