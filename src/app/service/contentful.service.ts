import { Injectable } from '@angular/core';
import {createClient, Entry, EntryCollection} from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: 'dp7p5wid9jjt', // Replace with your Space ID
    accessToken: 'OF_2KlMWJaqJM7R_uyMvR40j2ZFpTG6WqkDiGpxbIjg' // Replace with your Content Delivery API - access token
  });

  constructor() { }

  getEntries(contentType: string): Promise<Entry<any>[]> {
    return this.client.getEntries({ content_type: contentType })
        .then((response: EntryCollection<any>) => response.items);
  }
}
