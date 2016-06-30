export class InMemoryDataService {
	createDb ( ) {
		let contacts = [

				{	
					id : "1",
					name: "Julien",
					phoneNumber: "13964897627"
				},
				{
					id : "2",
					name: "Jack",
					phoneNumber: "16955467789",
				},
				{
					id : "3",
					name: "Billy",
					phoneNumber: "18922568964"
				}
		];
		return { contacts };
	}
}