import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsDetail } from '../detail/detail.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-news-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public readonly news$: Observable<Array<NewsDetail>> = this.httpClient.get<Array<NewsDetail>>(`${environment.url}/assets/news.json`);

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

}
