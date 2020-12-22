import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { resolveTxt } from 'dns';
import { Subscriber } from 'rxjs';
import { User } from 'tdf/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'vue'];
  topicHasError = true;

  User: any {
   name: '';
   email: '';
   phone: ;
   topic: '';
   timePreference: '';
   subscriber: '';
  };

  validateTopic(){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
}
