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
			sidebar: [
				{
					label: 'Cherax Wiki',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Outfits', slug: 'outfits' },
						{ label: 'Modded Vehicles', slug: 'vehicles' },
						{ label: 'Menu Themes', slug: 'themes'},
						{ label: 'Luas', slug: 'luas' },
						{ label: 'Advertising', slug: 'advertising' },
						{ label: 'Recoveries', slug: 'recoveries' },
					],
				},
			],
		}),
	],
});
