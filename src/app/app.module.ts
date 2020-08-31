import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: 'search', component: SearchBarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SideBarComponent,
    NewsComponent,
    SearchBarComponent
	],
  imports: [
    BrowserModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		FormsModule,
		BrowserAnimationsModule,
		NgbModule
	],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
