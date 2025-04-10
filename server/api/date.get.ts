export default defineEventHandler((event) => {
	console.log('currentDateAPI->event', event);
	const currentDate = new Date().toUTCString();
	console.log('currentDateAPI->currentDate', currentDate);
	return {
		date: currentDate
	};
});