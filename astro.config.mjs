// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cherax.wiki',
	integrations: [
		sitemap(),
		starlight({
			title: 'Cherax Wiki',
			favicon: '/logo.png',
			social: [],
			customCss: [
				'./src/styles/custom.css',
				'./src/assets/video-embed.css',
			],
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: 'Purchasing',
					autogenerate: { directory: 'purchasing' },
				},
				{
					label: 'Recoveries',
					autogenerate: { directory: 'recovery' }
				},
				{
					label: 'Customization',
					autogenerate: { directory: 'customization' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }
				},
				{
					label: 'Contributing',
					autogenerate: { directory: 'contributing' }
				}
			],
		}),
	],
});
