import fs, { promises as pfs } from 'fs';
import { exists } from '../../src';

// checkDirExist
/**
 *
 *
 * @export
 * @param {string} dir
 * @param {boolean} [create=false]
 * @returns {Promise<boolean>}
 */
export async function existsDir(dir: string, create: boolean = false): Promise<boolean> {
    if (!(await exists(dir))) {
        if (create) {
            await pfs.mkdir(dir, { recursive: true });
            return true;
        }
        return false;
    }
    return true;
}

// isDirectoryEmpty
// isDirectory
