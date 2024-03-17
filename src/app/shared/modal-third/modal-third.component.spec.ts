import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalThirdComponent } from './modal-third.component';

describe('ModalThirdComponent', () => {
  let component: ModalThirdComponent;
  let fixture: ComponentFixture<ModalThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalThirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
