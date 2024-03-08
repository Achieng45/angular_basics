import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomchildComponent } from './domchild.component';

describe('DomchildComponent', () => {
  let component: DomchildComponent;
  let fixture: ComponentFixture<DomchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
