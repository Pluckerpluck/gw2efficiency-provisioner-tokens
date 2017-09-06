export const VB = "Verdent Brink";
export const AB = "Auric Basin";
export const TD = "Tangled Depths";

export type GW2Map =
	typeof VB |
	typeof AB |
	typeof TD;

export interface Item {
	id: number;
	name: string;
}

export interface Provisioner {
	map: GW2Map;
	name: string;
	possibleItems: Item[];
	waypoint: string;
}

export const provisioners: Provisioner[] = [
	{
		map: VB,
		name: "Quartermaster Natomi",
		possibleItems: [
			{
				id: 46281,
				name: "Assassin's Krait Machete",
			},
			{
				id: 46186,
				name: "Assassin's Krait Shooter",
			},
			{
				id: 46040,
				name: "Assassin's Krait Star",
			},
			{
				id: 45622,
				name: "Assassin's Gladiator Legplates",
			},
			{
				id: 45765,
				name: "Assassin's Noble Pants",
			},
			{
				id: 45731,
				name: "Assassin's Masquerade Leggings",
			},
		],
		waypoint: "[&BN4HAAA=]",
	},
];
