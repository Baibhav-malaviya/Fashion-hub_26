export const formatCurrency = (num) => {
	const formattedNumber = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
	}).format(num);
	return formattedNumber;
};

export function formatName(inputName) {
	// Check if the input is a valid string
	if (typeof inputName !== "string") {
		return "Invalid input";
	}

	// Split the name based on spaces or hyphens
	const words = inputName.split(/[ ]/);

	// Capitalize each word
	const formattedName = words
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");

	return formattedName;
}

export function formatDate(inputDate) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Create a new Date object from the input date string
	const date = new Date(inputDate);

	// Extract day, month, and year from the date object
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	// Format the date string with the month name abbreviation
	const formattedDate = `${day}-${months[monthIndex]}-${year}`;

	return formattedDate;
}
