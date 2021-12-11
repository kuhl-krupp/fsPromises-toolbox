import { promises as pfs } from 'fs';
import path from 'path';
import { readDeep } from './readDeep';
import { isDir } from './is';

/**
 *
 * It will return undefined when the dirPath is invalid
 *
 * @export
 * @param {string} dirPath DirectoryPath
 * @returns {Promise<true|undefined>}
 */
export async function unlinkDeep(dirPath: string): Promise<true | undefined> {
  // Check if given path is a valid directory
  if (!(await isDir(dirPath))) {
    return undefined;
  }

  // Get deep list of files and iterate
  let fileDir;
  for await (const file of await readDeep(dirPath)) {
    // Unlink each file
    await pfs.unlink(file);

    const newFileDir = path.dirname(file);
    if (fileDir === undefined) {
      fileDir = newFileDir;
    } else if (fileDir !== newFileDir) {
      // Remove dir
      await pfs.rmdir(fileDir);
      fileDir = newFileDir;
    }
  }

  // Remove dirPath
  await pfs.rmdir(dirPath);

  return true;
}
