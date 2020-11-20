import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { TestingModule } from "src/app/shared/testing.module";

describe("DashboardComponent", () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [TestingModule],
			declarations: [DashboardComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
