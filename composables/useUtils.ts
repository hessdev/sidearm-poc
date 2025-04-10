export const useUtils = () => {
	const currentDate = () => {
		const now = new Date().toUTCString();
		console.log('currentDate', now);
		return now;
	}
	return {
		currentDate,
	};
}