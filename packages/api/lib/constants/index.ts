export enum AvailableVersions {
  // DEPRECATED = 'deprecated',
  // MAINTENANCE = 'maintenance',
  // CURRENT = 'current',
  // RELEASE_CANDIDATE = 'release_candidate',
  // DEV = 'dev',
  VERSION_2023_10 = '2023-10',
  VERSION_2024_01 = '2024-01',
  VERSION_2024_04 = '2024-04',
}

export const defaultVersion = AvailableVersions.VERSION_2024_04;

export type ApiVersionType = AvailableVersions | string;

export type QueryVariables = Record<string, any>;
