import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtranarVoz } from './extranar-voz';

describe('ExtranarVoz', () => {
  let component: ExtranarVoz;
  let fixture: ComponentFixture<ExtranarVoz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtranarVoz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtranarVoz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
