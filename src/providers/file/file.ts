import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

// hade provider ra derto gha bi lghalat ta9eriban w mabghitch n7ayedo 7it 3aref bli ghadi nesta3mlo mn ba3ed
@Injectable()
export class FileProvider {

  constructor(public http: Http , public platform:Platform) {
  }

  getData() {
    var url = "assets/file_json/jsonFile.json"; 
    if (this.platform.is('cordova') && this.platform.is('android')) 
    {
      url = "/android_asset/www/" + url; 
    }
    return this.http.get(url).map(res => res.json()); 
  }

}
