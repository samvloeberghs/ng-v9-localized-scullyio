import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { NewsDetail } from './detail.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-news-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public readonly newsDetail$: Observable<NewsDetail> = combineLatest([
    this.activatedRoute.params.pipe(pluck('id')),
    this.httpClient.get<Array<NewsDetail>>(`${environment.url}/assets/news.json`),
  ]).pipe(
    map(([id, news]) => {
      return news.find((newsDetail => newsDetail.id === +id));
    }),
  );

  constructor(
    private readonly httpClient: HttpClient,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
  }

}
