import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarndChildFileComponent } from './garnd-child-file.component';

describe('GarndChildFileComponent', () => {
  let component: GarndChildFileComponent;
  let fixture: ComponentFixture<GarndChildFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarndChildFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarndChildFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
