<script setup>
const { currentDate } = useUtils();
const composableDate = currentDate();
const apiDate = await $fetch('/api/date');
</script>

<template>
	<Container>
		<h1>Rosters</h1>
		<h2>Composable Date: {{ composableDate }}</h2>
		<h2>API Date: {{ apiDate.date }}</h2>
	</Container>
</template>