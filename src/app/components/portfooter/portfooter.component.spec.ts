import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfooterComponent } from './portfooter.component';

describe('PortfooterComponent', () => {
  let component: PortfooterComponent;
  let fixture: ComponentFixture<PortfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
