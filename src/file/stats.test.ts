import path from 'path';
import { Stats } from 'fs';
import { fileStats } from './stats';

const TEST_DIR = process.env.TEST_DIR_PATH ?? '';

describe('fileStats', () => {
    describe('Check if valid file returns stats', () => {
        it('Should return file stats', async () => {
            const res = await fileStats(path.join(TEST_DIR, 'lorem', 'ipsum', 'test.txt'));
            expect(res).not.toBe(undefined);
            expect(res instanceof Stats).toBe(true);
        });
    });
    describe('Check if invalid file returns false', () => {
        it('Should return false', async () => {
            const res = await fileStats(path.join(TEST_DIR, 'doesntExist.txt'));
            expect(res).toBe(undefined);
            expect(typeof res).toBe('undefined');
        });
    });
});
