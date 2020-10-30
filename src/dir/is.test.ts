import path from 'path';
import { isDir } from './is';

const TEST_DIR = process.env.TEST_DIR_PATH ?? '';

describe('isFile', () => {
    describe('Check if file is a directory', () => {
        it('Should return false', async () => {
            const res = await isDir(path.join(TEST_DIR, 'lorem', 'ipsum', 'test.txt'));
            expect(res).toBe(false);
        });
    });

    describe('Check if file is not a directory', () => {
        it('Should return true', async () => {
            const res = !(await isDir(path.join(TEST_DIR, 'lorem', 'ipsum', 'test.txt')));
            expect(res).toBe(true);
        });
    });

    describe('Check if directory is a directory', () => {
        it('Should return true', async () => {
            const res = await isDir(path.join(TEST_DIR, 'lorem'));
            expect(res).toBe(true);
        });
    });

    describe('Check if deep directory is a directory', () => {
        it('Should return true', async () => {
            const res = await isDir(path.join(TEST_DIR, 'lorem', 'ipsum'));
            expect(res).toBe(true);
        });
    });

    describe('Check if not existing path returns false', () => {
        it('Should return false', async () => {
            const res = await isDir(path.join(TEST_DIR, Math.random().toString()));
            expect(res).toBe(false);
        });
    });
});
