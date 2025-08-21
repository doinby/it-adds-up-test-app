export const CONSTRAINTS = {
	required: {
		value: true,
		message: 'Required',
	},
	maxLength: {
		value: 10,
		message: 'Price must be less than 1 billions',
	},
	pattern: {
		value: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/g,
		message: 'Value of 0-9 is required',
	},
	// valueAsNumber: true,
};

export function isEmptyObj(obj: object) {
	return Object.keys(obj).length <= 0;
}
