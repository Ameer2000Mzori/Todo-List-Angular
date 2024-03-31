import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFileComponent } from './child-file.component';

describe('ChildFileComponent', () => {
  let component: ChildFileComponent;
  let fixture: ComponentFixture<ChildFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
