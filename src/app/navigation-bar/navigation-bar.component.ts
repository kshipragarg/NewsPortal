import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
	userName: String ="";
	response: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
	search(){
			let resp = this.http.get('https://api.github.com/users/' + this.userName);
			resp.subscribe((response) => {
				this.response=response
				console.log(this.response);
				})
	}
}
