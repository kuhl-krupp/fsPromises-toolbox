import { promises as pfs } from 'fs';
import { exists } from '../_helpers/exists';

/**
 * Check if given path is a valid file
 *
 * @export
 * @param {string} path FilePath
 * @returns {Promise<boolean>} true: if FilePath is a file, false: if FilePath doesn't exist or it isn't a file
 */
export async function isFile(path: string): Promise<boolean> {
    if (await exists(path)) {
        const stat = await pfs.lstat(path);
        return stat.isFile();
    }
    return false;
}
