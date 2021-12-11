import { promises as pfs } from 'node:fs';
import { exists } from '@/_helpers/exists';

/**
 * Check if given path is a valid file
 *
 * @export
 * @param {string} filePath FilePath
 * @returns {Promise<boolean>} true: if path is a file,
 * false: if path doesn't exist or it isn't a file
 */
export async function isFile(filePath: string): Promise<boolean> {
  if (await exists(filePath)) {
    const stat = await pfs.lstat(filePath);
    return stat.isFile();
  }
  return false;
}
