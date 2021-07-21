const doc = require("../config/SheetsConfig");

class SheetsService {

	async submitDetails(submission) {
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[0];

		await sheet.addRow({
			timestamp: new Date().toString(),
			...submission,
		});
	}

	//Setting up headers
	async setupSheetHeaders() {
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[0];

		//Registration fields can be changed from here ->
		
		await sheet.setHeaderRow([
			"timestamp",
			"Name",
            "Year",
            "Branch",
            "email"
		]);
	}
}

module.exports = SheetsService;
