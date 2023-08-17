import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  constructor() {}

  data = [
    {
       "id": 1,
       "name": "test",
       "subs": [
          {
             "id": 2,
             "name": "test2",
             "subs": []
          },
          {
             "id": 3,
             "name": "test3",
             "subs": []
          }
       ]
    },
    {
       "id": 4,
       "name": "test4",
       "subs": [
          {
             "id": 5,
             "name": "test5",
             "subs": [
                {
                   "id": 6,
                   "name": "test6",
                   "subs": []
                }
             ]
          }
       ]
    }
 ]
 

}
