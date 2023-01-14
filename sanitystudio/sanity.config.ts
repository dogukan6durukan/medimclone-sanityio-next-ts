import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

export default defineConfig({
  name: 'default',
  title: 'medium-blog',

  projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool(),  unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
