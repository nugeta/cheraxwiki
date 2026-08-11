// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cherax.wiki',
	trailingSlash: 'always',
	redirects: {
		'/getting-started': '/purchasing/getting-started/',
		'/start': '/purchasing/getting-started/',
		'/purchasing-cherax': '/purchasing/purchasing-cherax/',
		'/purchasing': '/purchasing/purchasing-cherax/',
		'/buy': '/purchasing/purchasing-cherax/',
		'/getting-access-to-channels': '/purchasing/getting-access-to-channels/',
		'/channels': '/purchasing/getting-access-to-channels/',
		'/access': '/purchasing/getting-access-to-channels/',
		'/prime': '/purchasing/prime/',
		'/advertising': '/purchasing/advertising/',
		'/ads': '/purchasing/advertising/',
		'/reselling-cherax': '/purchasing/reselling-cherax/',
		'/reselling': '/purchasing/reselling-cherax/',
		'/resellers': '/purchasing/reselling-cherax/',

		'/recoveries': '/recovery/recoveries/',
		'/recovery': '/recovery/recoveries/',
		'/heists': '/recovery/heistcutsandpreps/',
		'/heistcutsandpreps': '/recovery/heistcutsandpreps/',
		'/heistcuts': '/recovery/heistcutsandpreps/',
		'/preps': '/recovery/heistcutsandpreps/',

		'/outfits': '/customization/outfits/',
		'/vehicles': '/customization/vehicles/',
		'/cars': '/customization/vehicles/',
		'/themes': '/customization/themes/',
		'/dlcs': '/customization/dlcs/',
		'/dlc': '/customization/dlcs/',
		'/luas': '/customization/luas/',
		'/lua': '/customization/luas/',

		'/creating-luas': '/guides/creating-luas/',
		'/lua-guide': '/guides/creating-luas/',
		'/create-luas': '/guides/creating-luas/',
		'/writing-luas': '/guides/creating-luas/',
		'/linux': '/guides/using-cherax-on-linux/',
		'/using-cherax-on-linux': '/guides/using-cherax-on-linux/',

		'/contributions': '/contributing/contributions/',
		'/contribute': '/contributing/contributions/',
		'/donations': '/contributing/donations/',
		'/donate': '/contributing/donations/',
		'/wallofgoats': '/contributing/wallofgoats/',
		'/goats': '/contributing/wallofgoats/',
	},
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
