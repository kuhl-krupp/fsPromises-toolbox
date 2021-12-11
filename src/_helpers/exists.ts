import fs, { promises as pfs } from 'node:fs';

export async function exists(filePath: string): Promise<boolean> {
  try {
    await pfs.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
