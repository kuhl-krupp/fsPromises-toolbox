import { promises as pfs } from 'fs';
import { exists } from '../_helpers/exists';

/**
 * Check if given path is a valid directory
 *
 * @export
 * @param {string} dirPath DirectoryPath
 * @returns {Promise<boolean>} true: if path is a directory, false: if path doesn't exist or it isn't a directory
 */
export async function isDir(dirPath: string): Promise<boolean> {
    if (await exists(dirPath)) {
        const stat = await pfs.lstat(dirPath);
        return stat.isDirectory();
    }
    return false;
}
