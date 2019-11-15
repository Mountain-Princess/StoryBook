import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ch3pg1Page } from './ch3pg1.page';

describe('Ch3pg1Page', () => {
  let component: Ch3pg1Page;
  let fixture: ComponentFixture<Ch3pg1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch3pg1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ch3pg1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
