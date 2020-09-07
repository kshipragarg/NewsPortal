import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from 'jquery'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	query : String="";
	responsedata: any;
	sArticles: Array<any>;
	api_url : any[];
	url : any[];
	value : any[];
	constructor(public http: HttpClient, public db: AngularFirestore ) {
		
	$(document).ready(function(){ 
						$("#page-content-wrappersearch").hide();
        }); 
		
		db.collection('subject').valueChanges()
		.subscribe((op) => { 
		this.ngOnInitTest(op);
		this.value = op;
		});
	}
	search(){
		let apic = this.api_url.toString();
		console.log("Article 3 is : ",apic);
		
		this.http.get(apic).subscribe(data => {
			this.sArticles = data['articles'];
			console.log("Data of source : ", this.sArticles);
			this.query = this.query;
			if(this.sArticles){
				
				$(document).ready(function(){ 
					$("app-news").hide();
					$("#page-content-wrappersearch").show();
				});	
			}
		});
	}
		
	ngOnInitTest(op){
		console.log("TT", op);
		console.log(op[0].url);
			this.http.get(op[0].url).subscribe(data =>{
			   //this.mArticles = data['articles'];
			   this.api_url = op[0].url;
			});
			   
	}
	ngOnInit(): void {}
}	