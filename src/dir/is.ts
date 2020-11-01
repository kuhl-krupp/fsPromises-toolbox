import { promises as pfs } from 'fs';
import { exists } from '../_helpers/exists';

/**
 * Check if given path is a valid directory
 *
 * @export
 * @param {string} path DirectoryPath
 * @returns {Promise<boolean>} true: if path is a directory, false: if path doesn't exist or it isn't a directory
 */
export async function isDir(path: string): Promise<boolean> {
    if (await exists(path)) {
        const stat = await pfs.lstat(path);
        return stat.isDirectory();
    }
    return false;
}
