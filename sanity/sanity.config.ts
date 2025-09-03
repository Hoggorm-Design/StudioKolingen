import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {structureTool} from 'sanity/structure'



export default defineConfig({
  name: 'default',
  title: 'Studio Kolingen',

  projectId: 'mcc4dfqm',
  dataset: 'production',

  plugins: [
      structureTool({
        structure,
      }),
      visionTool(),
  ],
            
  schema: {
    types: schemaTypes,
  },
})
