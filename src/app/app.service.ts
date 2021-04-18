import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AppService{
     constructor(private http: HttpClient){}

     get(){
         return this.http.get('https://appliedvisionbaseball.com/wp-admin/admin-ajax.php?action=get_level_data_dev&post_id=3879&user_id=477&level=3');
     }
}