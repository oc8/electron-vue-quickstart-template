<template>
	<router-view />
	<!-- <HomeView /> -->
</template>

<script setup lang="ts">
import { provide } from 'vue';
import HomeView from './views/HomeView.vue'

provide('colors', {
	color0: "#fff",
	color1: "#000",
})
</script>

<style>
* {
	border: 0;
	font-size: 100%;
	font-family: inherit;
	text-decoration: none;
}
*,
::before,
::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
div {
	width: 100%;
	align-items: center;
}h1 {
	font-size: 2rem;
}
h2 {
	font-size: 1rem;
}
h3 {
	font-size: 0.8rem;
}
button {
	cursor: pointer;
	background: none;
	font-size: 1rem;
}
a {
	color: black;
}
.column {
	flex-direction: column;
}
.row {
	flex-direction: row;
}
.center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.left {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
.right {
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
}
.space-between {
	display: flex;
	justify-content: space-between !important;
}
.stack {
	position: relative;
}
.wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
}
@media screen and (max-width: 1000px) {
  .wrap {
    flex-direction: column;
  }
}
</style>
