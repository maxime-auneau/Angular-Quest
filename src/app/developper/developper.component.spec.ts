import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopperComponent } from './developper.component';

describe('DevelopperComponent', () => {
  let component: DevelopperComponent;
  let fixture: ComponentFixture<DevelopperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopperComponent]
    });
    fixture = TestBed.createComponent(DevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
