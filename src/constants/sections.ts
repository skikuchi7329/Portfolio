/** Section order, shared by the page and the header nav. */
export const sections = [
  { no: '01', id: 'profile', title: '自己紹介', en: 'Profile' },
  { no: '02', id: 'career', title: '経歴', en: 'Career' },
  { no: '03', id: 'works', title: '制作', en: 'Works' },
] as const;

export type Section = (typeof sections)[number];
