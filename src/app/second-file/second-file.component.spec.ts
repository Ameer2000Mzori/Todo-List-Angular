import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFileComponent } from './second-file.component';

describe('SecondFileComponent', () => {
  let component: SecondFileComponent;
  let fixture: ComponentFixture<SecondFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
