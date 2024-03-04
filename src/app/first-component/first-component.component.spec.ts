import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './first-component.component';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponentComponent,NgClass,NgStyle,FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
