import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerReir } from './hacer-reir';

describe('HacerReir', () => {
  let component: HacerReir;
  let fixture: ComponentFixture<HacerReir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HacerReir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HacerReir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
