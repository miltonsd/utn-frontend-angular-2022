import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CharactersResponse, Character } from '../interfaces/character';
import { tap, map, catchError, throwError } from 'rxjs';

@Injectable()
export class CharactersService {
  constructor(private _http: HttpClient) {}

  getCharacters() {
    return this._http
      .get(`${environment.apiUrl}/api/character`, { headers: {}, params: {} })
      .pipe(
        catchError((error) => throwError(() => error)),
        tap((response: any) => {
          console.log(response);
        }),
        map((response: any) => {
          const characters: Character[] = [];

          if (response.results) {
            response.results.map((characterItem: any) => {
              const character: Character = {
                id: characterItem.id || 0,
                image: characterItem.image || '',
                name: characterItem.name || '',
                species: characterItem.species || '',
                status: characterItem.status || '',
                originName: characterItem.origin.name || '',
              };
              characters.push(character);
            });
          }

          const charactersResponse: CharactersResponse = {
            count: response.info.count || 0,
            pages: response.info.pages || 0,
            next: response.info.next || null,
            prev: response.info.prev || null,
            characters,
          };

          return charactersResponse;
        })
      );
  }
}
