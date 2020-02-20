import {Component, OnInit} from '@angular/core';

/**
 * The search page component
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    const iframe = document.getElementById( 'api-frame' );
    console.log(iframe);
    const uid = '7w7pAfrCfjovwykkEeRFLGw5SXS';

    // @ts-ignore
    const client = new Sketchfab( iframe );

    client.init( uid, {
      success: (api) => {
        api.start();
        api.addEventListener( 'viewerready', () => {
          console.log( 'Viewer is ready' );
        });
      },
      error: () => {
        console.log( 'Viewer error' );
      }
    } );
  }
}
