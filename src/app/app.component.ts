import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rectangulosejemplo';
  Xa1:number=0;
  Ya1:number=0;
  Xa2:number=0;
  Ya2:number=0;
  Xb1:number=0;
  Yb1:number=0;
  Xb2:number=0;
  Yb2:number=0;
  resultado:string="";

  Evaluar(){
    var Wa = this.Xa2-this.Xa1;
    var Ha = this.Ya2-this.Ya1;
    var Wb = this.Xb2-this.Xb1;
    var Hb = this.Yb2-this.Yb1;

    var Xa3=(this.Xa2 + this.Xa1) / 2;
    var Ya3=(this.Ya2 + this.Ya1) / 2;
    var Xb3=(this.Xb2 + this.Xb1) / 2;
    var Yb3=(this.Yb2 + this.Yb1) / 2;

    var absX3=Math.abs(Xb3-Xa3);
    var absY3=Math.abs(Yb3-Ya3);

    if((absX3<=Wa/2 + Wb/2)&& (absY3<=Ha/2 + Hb/2)){
      this.resultado="se cruzan";
    }else{
      this.resultado="no se cruzan";
    }


  }

}
