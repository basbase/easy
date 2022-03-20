type Func<T = unknown> = (a: any) => T;
export type Viewer = { in?: { key: string, f?: Func }, out?: { key: string, f?: Func } };

export class View {
  constructor(readonly views: Viewer[] = [], readonly from: 'scratch' | 'source' = 'scratch') {
  }
}
