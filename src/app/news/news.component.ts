import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@firebase/firestore';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
value : any[];
  constructor(private http: HttpClient, db: AngularFirestore ) {
		db.collection('subject').valueChanges()
		.subscribe((value) => console.log(value));
	}
	users: any;
  ngOnInit(){
		
		//this.
		
		let resp = this.http.get("https://api.github.com/users")
		resp.subscribe((data) => this.users=data) ;
		}
  }
