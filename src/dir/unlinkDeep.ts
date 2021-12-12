import { promises as pfs } from 'fs';
import { isDir } from './is';

/**
 *
 * Unlinks given directory structure recursively
 *
 * @export
 * @param {string} dirPath Root directory path that shall be unlinked
 * @returns {Promise<boolean>}
 * true: if the method executed without problems,
 * false: if the method had problems during execution
 */
export async function unlinkDeep(
  dirPath: string,
): Promise<boolean> {
  // Check if given path is a valid directory
  if (!(await isDir(dirPath))) {
    return false;
  }

  try {
    // Try to remove folder recursively
    await pfs.rm(dirPath, { recursive: true });
  } catch {
    return false;
  }

  return true;
}
