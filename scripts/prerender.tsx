import { readFile, writeFile } from 'node:fs/promises'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

// The shipped page contains the portfolio text before JavaScript loads.
const markup = renderToString(<App />)
const template = await readFile('dist/index.html', 'utf8')
if (!template.includes('<div id="root"></div>'))
  throw new Error('Missing React root in build output')
const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
await writeFile('dist/index.html', html)
console.log('Prerendered the portfolio for search engines and fast first paint.')
