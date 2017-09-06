# GW2 Efficiency Provisioner Tokens

This script is designed to be run on the [gw2efficiency.com crafting calculator](https://gw2efficiency.com/crafting/calculator/).

It will search for the cheapest items
(to either craft or buy)
for each vendor and add them to the calculator automatically.
GW2 Efficiency then does the rest of the work and determines the optimum way to craft them,
whilst also giving step by step instructions.

## Building the script

The script is written in TypeScript and thus must be compiled before it can be run in a browser.
As long as you have Java on your system, this can be simply done by running:

`./gradlew build` on linux

`.\gradlew.bat build` on linux

This will run gradle which will:

	* Download node and npm
	* Run `npm install` to grab all dependencies
	* tslint the code to ensure standards are met
	* Compile the typescript to javascript
	* Rollup the javascript into a single file `bundle.js`