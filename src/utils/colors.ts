const difficultyColor = {
  NOV: '#63a',
  ADV: '#ec0',
  EXH: '#f33',
  MXM: '#9ac',
  INF: '#e2a',
  GRV: '#f60',
  HVN: '#08f',
  VVD: '#f19',
};

const levelColor = {
  NOV: '#ddf',
  ADV: '#ffc',
  EXH: '#fdd',
  MXM: '#eef',
  INF: '#fce',
  GRV: '#fdc',
  HVN: '#cef',
  VVD: '#fdf',
};

export function getDifficultyWikiColor(d: Course.Difficulty): string {
  return difficultyColor[d];
}

export function getLevelWikiColor(d: Course.Difficulty): string {
  return levelColor[d];
}
