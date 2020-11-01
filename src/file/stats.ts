import { promises as fs, Stats } from 'fs';

/**
 * Get File Stats without promise rejections.
 * It will return false when the file doesn't exist
 *
 * @export
 * @param {string} filePath
 * @returns {(Promise<Stats | false>)}
 */
export async function fileStats(filePath: string): Promise<Stats | false> {
    try {
        return await fs.stat(filePath);
    } catch {
        return false;
    }
}
