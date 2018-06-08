import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {ChildComponent} from './child/child.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,ChildComponent
      ],
      imports:[FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();//test case will pass if app component is instantiated
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular  5 App -CGI Chennai');
  }));
  it('h1 must contain expected test', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(' Angular 5 is running!!!!');
  }));

  it('four children must be created',async(()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const ele=fixture.debugElement.nativeElement;
     var obj=ele.getElementsByTagName('app-child');
     expect(obj.length).toEqual(4);
  }));
});
