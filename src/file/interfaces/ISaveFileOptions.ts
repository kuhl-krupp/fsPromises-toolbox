export interface ISaveFileOptions {
    /**
     * If the File should be JSON Pretty Printed. ONLY USE WHEN INPUT-DATA IS JSON
     */
    JSONPrettyPrint?: boolean;
    /**
     * Create Directory if it doesn't exist
     */
    createDir?: boolean;
    // If `encoding` is not supplied, the default of `'utf8'` is used.
    encoding?: string | null;
    // If `mode` is not supplied, the default of `0o666` is used.
    // If `mode` is a string, it is parsed as an octal integer.
    mode?: string | number;
    // If `flag` is not supplied, the default of `'w'` is used.
    flag?: string | number;
}
