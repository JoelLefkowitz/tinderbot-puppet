import { MatchesService } from "./matches.service";
import { TestBed } from "@angular/core/testing";
import { TestingModule } from "src/app/shared/testing.module";

describe("MatchesService", () => {
	let service: MatchesService;

	beforeEach(() => {
		TestBed.configureTestingModule({ imports: [TestingModule] });
		service = TestBed.inject(MatchesService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
