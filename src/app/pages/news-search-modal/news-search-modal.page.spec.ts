import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSearchModalPage } from './news-search-modal.page';

describe('NewsSearchModalPage', () => {
  let component: NewsSearchModalPage;
  let fixture: ComponentFixture<NewsSearchModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSearchModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSearchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
