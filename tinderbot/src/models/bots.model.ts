export interface Bot {
	botUrl: string;
	mainLoop: () => Promise<void>;
}
