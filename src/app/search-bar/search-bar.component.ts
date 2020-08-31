import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

query: String ="";
	responsedata: any;
constructor(private http: HttpClient) { 
				$(document).ready(function(){ 
						$("#page-content-wrapper").hide();
        }); 
}

  ngOnInit(): void {
  }
	search(){
			let resp = this.http.get('https://api.github.com/users/' + this.query);
			resp.subscribe((responsedata) => {
				this.responsedata=responsedata;
				console.log(this.responsedata);
				if(this.responsedata){
					//this.router.navigate(['/search']);
					$(document).ready(function(){ 
						$("app-news").hide();
						$("#page-content-wrapper").show();
						
        }); 
				}
					
				})
	}
}
