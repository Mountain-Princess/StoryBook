import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ch1pg1Page } from './ch1pg1.page';

describe('Ch1pg1Page', () => {
  let component: Ch1pg1Page;
  let fixture: ComponentFixture<Ch1pg1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch1pg1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ch1pg1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
