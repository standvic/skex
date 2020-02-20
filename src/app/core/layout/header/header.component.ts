import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Observable} from 'rxjs';

/**
 * The main page header component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  result: Observable<any>;

  constructor(private api: ApiService) {}
  clickButton() {
    this.api.getRecipes()
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  ngOnInit() {}
}
