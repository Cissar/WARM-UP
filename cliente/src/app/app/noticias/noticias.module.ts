import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoticiasComponent } from "./noticias.component"; 

@NgModule({
    declarations: [
        NoticiasComponent
    ],
    exports:[
        NoticiasComponent

    ],
    imports:[
        CommonModule
    ]


})

export class NoticiasModule {}
