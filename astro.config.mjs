// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cherax Wiki',
			social: [],
			customCss: ['./src/assets/video-embed.css'],
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
