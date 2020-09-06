import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	value : any[];
	url : any[];
	mArticles : Array<any>;
	mSources : Array<any>;
  constructor(private http: HttpClient, private db: AngularFirestore ) {
		db.collection('subject').valueChanges()
		.subscribe((op) =>  this.value=op);
	}
	
  ngOnInit(){
	  
	  this.http.get(url).subscribe(data => this.mArticles = data['articles']);
		/* this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d27f55bb18f8475299781bf1df8cc23c')
		.subscribe(data => this.mSources = data['sources']); */
		}
  }
