import { promises as pfs, Stats } from 'fs';

/**
 * Get File Stats without promise rejections.
 * It will return undefined when the file doesn't exist
 *
 * @export
 * @param {string} filePath
 * @returns {(Promise<Stats | undefined>)}
 */
export async function fileStats(filePath: string): Promise<Stats | undefined> {
  try {
    return await pfs.stat(filePath);
  } catch {
    return undefined;
  }
}
