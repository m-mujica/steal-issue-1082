import { Component } from "can";

const doSomething = () => new Date().getSeconds();

Component.extend({
	tag: "my-app",
	view: `
		<button on:click="doSomething()">time: {{time}}</button> 
	`,
	ViewModel: {
    time: {
      default: 0
    },
		
		doSomething() {
			this.time = doSomething();
		}
	}
});