/* eslint-disable import/no-cycle */
// Dir
import { isDir } from './dir/is';
import { readDeep } from './dir/readDeep';
import { unlinkDeep } from './dir/unlinkDeep';

// File
import { isFile } from './file/is';
import { fileStats } from './file/stats';

export {
    // Dir
    isDir,
    readDeep,
    unlinkDeep,
    // File
    isFile,
    fileStats
};
/* eslint-enable import/no-cycle */
