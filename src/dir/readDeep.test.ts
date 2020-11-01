import path from 'path';
import { readDeep } from './readDeep';

const TEST_DIR = process.env.TEST_DIR_PATH ?? '';

describe('readDeep', () => {
    describe('Check if it returns a valid filelist on a valid path', () => {
        it('Should return a string[] with a length of 3', async () => {
            const res = await readDeep(TEST_DIR);
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(3);
        });
    });
    describe('Check if it returns a valid filelist on a valid path when its not deep', () => {
        it('Should return a string[] with a length of 1', async () => {
            const res = await readDeep(path.join(TEST_DIR, 'lorem', 'ipsum'));
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(1);
        });
    });
    describe('Check if it returns an empty filelist on an invalid path', () => {
        it('Should return an empty string[]', async () => {
            const res = await readDeep(path.join(TEST_DIR, 'doesntExist'));
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(0);
        });
    });
});
