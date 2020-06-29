<script lang="ts">
	import SpeechButton from "./speech-button/SpeechButton.svelte";
	import {thing} from "./test";
	// @ts-ignore
	const clientSocket = io();
	console.log("SOCKET", clientSocket);
</script>

<main>
	<h1>Hello {thing}!</h1>
	<SpeechButton/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
