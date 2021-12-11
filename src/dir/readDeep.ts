import { promises as pfs } from 'node:fs';
import path from 'node:path';

/**
 * Reads directory files deeply
 *
 * @export
 * @param {string} dirPath DirectoryPath
 * @returns {(Promise<IFileInfo[]>)}
 */
export async function readDeep(dirPath: string): Promise<string[]> {
  const paths: string[] = [];

  try {
    const dirents = await pfs.readdir(dirPath, { withFileTypes: true });

    for await (const dirent of dirents) {
      const p = path.resolve(dirPath, dirent.name);
      if (dirent.isDirectory()) {
        for await (const rp of await readDeep(p)) {
          paths.push(rp);
        }
      } else {
        paths.push(p);
      }
    }
  } catch {
    // eslint-disable-next-line no-empty
  }

  return paths;
}
