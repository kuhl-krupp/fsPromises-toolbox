import fs, { promises as pfs } from 'fs';

export async function exists(filePath: string): Promise<boolean> {
  try {
    await pfs.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
