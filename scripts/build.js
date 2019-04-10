const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

/**
 * Returns the name of all the files in the given directory
 */
const loadFileNames = dirPath =>
  new Promise((resolve, reject) =>
    fs.readdir(dirPath, (err, data) => (err ? reject(err) : resolve(data)))
  );

/**
 * load the given file
 */
const loadFile = path =>
  new Promise((resolve, reject) =>
    fs.readFile(path, 'utf-8', (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

const getNameWithoutExtension = filename =>
  filename
    .split('.')
    .slice(0, -1)
    .join('.');
/**
 * Writes text to file with given name.
 */
const writeFile = (path, contents) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, contents, err => (err ? reject(err) : resolve()))
  );

const fileExists = path =>
  new Promise((resolve, reject) =>
    fs.exists(path, err => (err ? reject(err) : resolve()))
  );
/**
 * Makes folder if it does not already exist
 */
const makeFolder = path =>
  new Promise(async (resolve, reject) => {
    const exists = await fileExists(path);
    if (!exists) {
      return fs.mkdir(path, err => (err ? reject(err) : resolve()));
    }
    resolve();
  });
/**
 * copy file
 */
const copyFile = (src, dist) =>
  new Promise((resolve, reject) =>
    fs.copyFile(src, dist, err => (err ? reject(err) : resolve()))
  );
/**
 * Reads the file, transforms to markdown, and writes to the given path with the same name of the file.
 */
const toRenderedMarkdown = async (filename, params = {}) => {
  const { inDir = 'docs', outDir = 'build' } = params;
  const file = await loadFile(`${inDir}/${filename}`);
  const markdown = md.render(file);
  const path = `${outDir}/${getNameWithoutExtension(filename)}.html`;
  console.log('writing file: ', path);
  return writeFile(path, markdown);
};

(async () => {
  try {
    const inDir = 'docs';
    const outDir = 'build';
    console.log('loading files...');
    const fileNames = await loadFileNames(inDir);
    console.log('loading making folder..');
    await makeFolder(outDir);
    console.log('loading rendering markdown and writing');
    await Promise.all([
      ...fileNames.map(filename =>
        toRenderedMarkdown(filename, { inDir, outDir })
      ),
      toRenderedMarkdown('README.md', { inDir: './', outDir })
    ]);
    console.log('moving README.md');
    await copyFile('README.md', `${outDir}/README.md`);
    console.log('done!');
  } catch (err) {
    console.error('err', err);
    process.exit(1);
  }
})();
