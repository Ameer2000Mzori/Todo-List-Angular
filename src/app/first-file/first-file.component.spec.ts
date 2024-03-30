import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFileComponent } from './first-file.component';

describe('FirstFileComponent', () => {
  let component: FirstFileComponent;
  let fixture: ComponentFixture<FirstFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
