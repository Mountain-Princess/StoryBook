import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ch4pg1Page } from './ch4pg1.page';

describe('Ch4pg1Page', () => {
  let component: Ch4pg1Page;
  let fixture: ComponentFixture<Ch4pg1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch4pg1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ch4pg1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
