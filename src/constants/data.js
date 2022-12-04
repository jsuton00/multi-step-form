import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

export const plans = [
	{ name: 'Arcade', icon: arcadeIcon, monthly: 9, yearly: 90, selected: false },
	{
		name: 'Advanced',
		icon: advancedIcon,
		monthly: 12,
		yearly: 120,
		selected: false,
	},
	{ name: 'Pro', icon: proIcon, monthly: 15, yearly: 150, selected: false },
];

export const addOns = [
	{
		name: 'Online service',
		description: 'Access to multiplayer games',
		monthly: 1,
		yearly: 10,
		selected: false,
	},
	{
		name: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		monthly: 2,
		yearly: 20,
		selected: false,
	},
	{
		name: 'Customizable profile',
		description: 'Custom theme on your profile',
		monthly: 2,
		yearly: 20,
		selected: false,
	},
];
