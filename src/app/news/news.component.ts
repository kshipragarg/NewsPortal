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
	api_url : any[];
	
  constructor(private http: HttpClient, private db: AngularFirestore ) {
		db.collection('subject').valueChanges()
		.subscribe((op) => { 
		this.ngOnInitTest(op);
		this.value = op;
		});
	}
	apiCall(){
		console.log("Article 2 is : ",this.api_url);
		//console.log("Article 3 is : ",op[0].url);
		let apic = this.api_url.toString();
		console.log("Article 3 is : ",apic);
		/*this.http.get(apic).subscribe(data => {
			this.mSources = data['sources'];
			console.log("Data of source : ", this.mSources);
		}
		);*/
		
		this.http.get(apic).subscribe(data => {
			this.mArticles = data['articles'];
			console.log("Data of source : ", this.mArticles);
		}
		);		
	}
	ngOnInit(){}
	
  ngOnInitTest(op){
	console.log("TT", op);
	console.log(op[0].url);
	  this.http.get(op[0].url).subscribe(data =>{
		   //this.mArticles = data['articles'];
		   this.api_url = op[0].url;
		   this.apiCall();
	  }
		   );
		   
		}
  }
