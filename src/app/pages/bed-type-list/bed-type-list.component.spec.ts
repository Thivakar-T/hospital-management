import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedTypeListComponent } from './bed-type-list.component';

describe('BedTypeListComponent', () => {
  let component: BedTypeListComponent;
  let fixture: ComponentFixture<BedTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
