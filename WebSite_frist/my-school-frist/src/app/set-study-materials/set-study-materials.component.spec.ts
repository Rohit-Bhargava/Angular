import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStudyMaterialsComponent } from './set-study-materials.component';

describe('SetStudyMaterialsComponent', () => {
  let component: SetStudyMaterialsComponent;
  let fixture: ComponentFixture<SetStudyMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetStudyMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetStudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
