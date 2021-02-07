declare namespace Course {
  type Difficulty =
    | 'NOV'
    | 'ADV'
    | 'EXH'
    | 'MXM'
    | 'INF'
    | 'GRV'
    | 'HVN'
    | 'VVD';

  type Information = {
    course: string;
    name1: string;
    name2: string;
    name3: string;
    difficulty1: Difficulty;
    difficulty2: Difficulty;
    difficulty3: Difficulty;
    level1: number;
    level2: number;
    level3: number;
  };
}
