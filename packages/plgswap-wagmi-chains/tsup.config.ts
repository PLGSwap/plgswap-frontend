import { defineConfig } from 'tsup'

import { getConfig } from 'tsup'

export default defineConfig(
  getConfig({
    dev: process.env.DEV === 'true',
    entry: ['src/index.ts'],
    platform: 'browser',
  }),
)
