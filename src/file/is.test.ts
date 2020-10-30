import path from 'path';
import { isFile } from './is';

const TEST_DIR = process.env.TEST_DIR_PATH ?? '';

describe('isFile', () => {
    describe('Check if directory is a file', () => {
        it('Should return false', async () => {
            const res = await isFile(path.join(TEST_DIR, 'lorem'));
            expect(res).toBe(false);
        });
    });

    describe('Check if directory is not a file', () => {
        it('Should return true', async () => {
            const res = !(await isFile(path.join(TEST_DIR, 'lorem')));
            expect(res).toBe(true);
        });
    });

    describe('Check if file is a file', () => {
        it('Should return true', async () => {
            const res = await isFile(path.join(TEST_DIR, 'lorem', 'ipsum', 'test.txt'));
            expect(res).toBe(true);
        });
    });

    describe('Check if not existing path returns false', () => {
        it('Should return false', async () => {
            const res = await isFile(path.join(TEST_DIR, Math.random().toString()));
            expect(res).toBe(false);
        });
    });
});
