import { TestBed, async } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { TestingModule } from "src/app/shared/testing.module";

describe("AppComponent", () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [TestingModule],
			declarations: [AppComponent]
		}).compileComponents();
	}));

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'tinderscore'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("tinderscore");
	});
});
