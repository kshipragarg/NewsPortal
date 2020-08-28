import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
isNavbarCollapsed=true;
	query: String ="";
	response: any;
constructor(private http: HttpClient){}//, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
	search(){
			let resp = this.http.get('https://api.github.com/users/' + this.query);
			resp.subscribe((response) => {
				this.response=response;
				console.log(this.response);
				if(this.response){
					//this.router.navigate(['/search']);
				}
			
				})
	}
}
