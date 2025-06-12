import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudasAmor } from './dudas-amor';

describe('DudasAmor', () => {
  let component: DudasAmor;
  let fixture: ComponentFixture<DudasAmor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DudasAmor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DudasAmor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
