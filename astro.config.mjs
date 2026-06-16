// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cherax.wiki',
	trailingSlash: 'always',
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
					items: [{ autogenerate: { directory: 'purchasing' } }],
				},
				{
					label: 'Recoveries',
					items: [{ autogenerate: { directory: 'recovery' } }],
				},
				{
					label: 'Customization',
					items: [{ autogenerate: { directory: 'customization' } }],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Contributing',
					items: [{ autogenerate: { directory: 'contributing' } }],
				}
			],
		}),
	],
});
