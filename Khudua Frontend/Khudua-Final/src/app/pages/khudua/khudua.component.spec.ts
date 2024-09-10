import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuduaComponent } from './khudua.component';

describe('KhuduaComponent', () => {
  let component: KhuduaComponent;
  let fixture: ComponentFixture<KhuduaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhuduaComponent]
    });
    fixture = TestBed.createComponent(KhuduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
