import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { NewsDetail } from './detail.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-news-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public readonly newsDetail$: Observable<NewsDetail> = this.activatedRoute.params
    .pipe(
      pluck('id'),
      switchMap((id: string) => {
        return this.httpClient.get<NewsDetail>(`${environment.url}/assets/news/${id}.json`);
      }),
    );

  constructor(
    private readonly httpClient: HttpClient,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

}
