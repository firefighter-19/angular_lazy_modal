import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEighthComponent } from './modal-eighth.component';

describe('ModalEighthComponent', () => {
  let component: ModalEighthComponent;
  let fixture: ComponentFixture<ModalEighthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEighthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
