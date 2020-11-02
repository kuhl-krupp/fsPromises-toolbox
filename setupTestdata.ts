// eslint-disable-next-line import/no-extraneous-dependencies
import extract from 'extract-zip';
import path from 'path';

beforeEach(async () => {
    await extract(path.resolve('./testdata.zip'), { dir: path.resolve('./') });
});

// import { unlinkDeep } from './src/dir/unlinkDeep';
// afterEach(async () => {
//     await unlinkDeep('./test');
// });
