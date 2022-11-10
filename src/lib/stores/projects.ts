import { writable } from "svelte/store"

const projectsData = [
	{
		name : 'viral photos',
		shoots:[],
		link : ''
	},
	{
		name : 'exhibitions',
		shoots: ['GRADUATION // 2021', 'GRADUATION Press', 'Photos']
	},
	{
		name : 'album covers',
		shoots:[],
		link : ''

	},
	{
		name : 'commissioned projects',
		shoots : [
			{
				name: 'Pepsi Black',
				link: ''
			},
			{
				name: "Adidas 'Watch Us Move'",
				link: ''
			},
			{
				name: `'Florida' // Marwan Moussa`,
				link: ''
			},
			{
				name: `Ehab Amin for Red Bull`,
				link: ''
			},
			{
				name: `'Free' // Marwan Pablo`,
				link: ''
			},
			{
				name: `'Dorak Gai' // Wegz`,
				link: ''
			},
			{
				name: 'Mousv In Ismalia',
				link: ''
			},
			{
				name: 'PUBG x Wegz',
				link: ''
			},
			{
				name: 'One & Four Studio AW20',
				link: ''
			},
			{
				name: 'Rebel Cairo',
				link: ''
			},
			{
				name: 'Pier 88 x LUCID',
				link: ''
			},
			{
				name: 'Suzanne SS19',
				link: ''
			},
			{
				name: 'UNITY',
				link: ''
			}
		]
	},
	{
		name : 'personal projects',
		shoots:['Gas Stations','CAIRO','Alexandria','2 AM with Marwan Pablo','OVERSIZED I','OVERSIZED II','OVERSIZED III'],
		link : ''
	},
	{
		name : 'live music',
		shoots:['Marwan Pablo', 'Redbull SoundClash 19', 'Disco Misr', 'Sandbox Festival 19','General'],
		link : ''
	},
	{
		name : 'portraits',
		shoots:[],
		link : ''
	}
]

const projects = writable(projectsData);

export default projects