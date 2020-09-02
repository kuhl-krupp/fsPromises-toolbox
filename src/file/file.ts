import { promises as fsPromises } from 'fs';
import { exists } from 'src';
import { existsDir } from '../dir/dir';
import { ISaveFileOptions } from './interfaces/ISaveFileOptions';

// read
// export async function JSONFromFile(filepath: string): Promise<JSON> {
//     return JSON.parse(await pfs.readFile(filepath, 'utf8'));
// }

export async function existsFile(filepath: string, filename: string) {
    let sfilepath = filepath;
    if (sfilepath.slice(-1) !== '/') sfilepath = sfilepath.concat('/'); // Append trailing slash
    if (!(await exists(`${sfilepath}${filename}`))) {
        return false;
    }
    return true;
}

/**
 * Write any Data in a file.
 *
 * @export
 * @param {string} filepath
 * @param {string} filename
 * @param {any} data
 * @param {(ISaveFileOptions | null)} [options]
 * @returns {Promise<boolean>}
 */
export async function writeFile(
    filepath: string,
    filename: string,
    data: any,
    options?: ISaveFileOptions | null
): Promise<boolean> {
    let sfilepath = filepath;
    if (sfilepath.slice(-1) !== '/') sfilepath = sfilepath.concat('/'); // Append trailing slash
    let wData = data;

    if (
        options?.createDir === true ||
        options?.createDir === null ||
        options?.createDir === undefined
    ) {
        if (!(await existsDir(sfilepath, true))) {
            // Throw error
            return false;
        }
    }
    // JSONPrettyPrint
    if (options?.JSONPrettyPrint) {
        try {
            // Check if JSON
            wData = JSON.stringify(await JSON.parse(data), null, 2);
        } catch {
            // Not JSON
            // Throw error ?
            return false;
        }
    }
    await fsPromises.writeFile(`${sfilepath}${filename}`, wData, {
        encoding: options?.encoding,
        mode: options?.mode,
        flag: options?.flag
    });
    return true;
}

// append
// export async function appendFile(data: IFileData) {
//     await pfs.appendFile(`./tmp/${data.name}.json`, `${data.data}\n`);
// }

// readFilesFromDir
// getFileStats
// isFile
// hashFileFromPath
