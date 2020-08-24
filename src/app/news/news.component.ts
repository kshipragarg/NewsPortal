import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	state1: any[];
  constructor(private http: HttpClient, db: AngularFireDatabase ) {
		db.list('/state1').valueChanges().subscribe((state1) => {
			this.state1 = state1;
			console.log(this.state1);
		})
	}
	users: any;
  ngOnInit(){
		let resp = this.http.get("https://api.github.com/users")
		resp.subscribe((data) => this.users=data) ;
		}
  }
