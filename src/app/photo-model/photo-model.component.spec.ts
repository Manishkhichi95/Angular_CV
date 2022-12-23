import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoModelComponent } from './photo-model.component';

describe('PhotoModelComponent', () => {
  let component: PhotoModelComponent;
  let fixture: ComponentFixture<PhotoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
