import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormirTranquila } from './dormir-tranquila';

describe('DormirTranquila', () => {
  let component: DormirTranquila;
  let fixture: ComponentFixture<DormirTranquila>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DormirTranquila]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormirTranquila);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
