import { injectable } from "tsyringe";

@injectable()
export class Logger {
	constructor() {}

	connectionSuccessful(): void {
		console.log("🌈 Successfully started running in your browser! 🌈");
	}
}
