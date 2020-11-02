import path from 'path';
import { unlinkDeep } from './unlinkDeep';
import { isDir } from './is';

const TEST_DIR = process.env.TEST_DIR_PATH ?? '';

describe('unlinkDeep', () => {
    describe('Check if it unlinks a deep folder structure with files and returns true', () => {
        it('Should unlink the test folder structure and return true', async () => {
            const res = await unlinkDeep(TEST_DIR);
            expect(res).toBe(true);

            const checkDir = await isDir(TEST_DIR);
            expect(checkDir).toBe(false);
        });
    });
    describe('Check if it unlinks a normal folder structure with files and returns true', () => {
        it('Should return', async () => {
            const dir = path.join(TEST_DIR, 'lorem', 'ipsum');
            const res = await unlinkDeep(dir);
            expect(res).toBe(true);

            const checkDir = await isDir(dir);
            expect(checkDir).toBe(false);
        });
    });
    describe('Check if it returns undefined on an valid file path', () => {
        it('Should return undefined', async () => {
            const res = await unlinkDeep(path.join(TEST_DIR, 'test3.txt'));
            expect(typeof res).toBe('undefined');
        });
    });
    describe('Check if it returns undefined on an invalid path', () => {
        it('Should return undefined', async () => {
            const res = await unlinkDeep(path.join(TEST_DIR, 'doesntExist'));
            expect(typeof res).toBe('undefined');
        });
    });
});
