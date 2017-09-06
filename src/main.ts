import { Item, Provisioner, provisioners as provisionerList } from "./provisioners";

interface CraftableItem extends Item {
	buy: {
		price: number;
	};
	sell: {
		price: number;
	};
	crafting: {
		buy: number;
		sell: number;
	};
}

interface UpdatedProvisioner extends Provisioner {
	cheapestItem: CraftableItem;
}

function Get(yourUrl: string): any {
	const Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	return JSON.parse(Httpreq.responseText);
}

function findCheapestItem(provisioner: Provisioner) {
	// Get all the items for a provisioner in one go
	let requestURL = "https://api.gw2efficiency.com/items?lang=en&ids=";
	for (const item of provisioner.possibleItems) {
		requestURL = requestURL + item.id + ",";
	}

	const results: CraftableItem[] = Get(requestURL);

	// Loop to select the item with the cheapest crafting cost
	// Uses buy orders as building components are normally easy to obtain
	let cheapestItem: CraftableItem;
	for (const item of results) {
		if (!cheapestItem || item.crafting.buy < cheapestItem.crafting.buy) {
			cheapestItem = item;
		}
	}

	return cheapestItem;
}

function findCheapestItems(provisioners: Provisioner[]) {
	// Deep clone to avoid modifying the passed parameter
	const updatedList: UpdatedProvisioner[] = JSON.parse(JSON.stringify(provisioners));
	for (const provisioner of updatedList) {
		provisioner.cheapestItem = findCheapestItem(provisioner);
	}
	return updatedList;
}

// Main
(() => {
	const updatedList = findCheapestItems(provisionerList);

	let cost = 0;
	for (const provisioner of updatedList) {
		cost += provisioner.cheapestItem.id;
		console.log(provisioner.name + " " + provisioner.waypoint + ": " + provisioner.cheapestItem.name);
	}
})();
