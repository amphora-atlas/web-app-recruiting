import { faker } from '@faker-js/faker';

export const uuid = faker.string.uuid;

// DUMMY DATA
const shuffle = u => u.map(value => ({ value, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ value }) => value);
const pick = arr => shuffle(arr)[0];

const wireDetailStatus = () => pick(['pending', 'rejected', 'verified', 'verified', 'verified']);

// #endregion

export const dummy = {
	...faker,
	agora: {
		wireDetailStatus,
	},
	actions: {
		pick,
	},
};
