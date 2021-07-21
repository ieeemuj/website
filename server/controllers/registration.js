const { sendMail } = require("../services/sendEmail");
const SheetsService = require("../services/SheetsService");

exports.postRegistration =async (req, res) => {
    try {
        //Creating a new instance of the class
		const regService = new SheetsService();
		
		await regService.setupSheetHeaders();

		regService.submitDetails(req.body).then(() => {
			res.status(200).json({
				success: true,
				message: "Registration successful",
			});
		});

		await sendMail({
			from:"IEEE",
			to:req.body.email,
			subject:"Thank you mail",
			html:`<p> Thank you for registering for the event </p>`
		})
		
		console.log({ success: true, data: "Email sent" });
	} catch (e) {
		console.log(e,"error");
		res.status(500).json({
			success: false,
			message: "Registration unsuccessful",
		});
	}
};