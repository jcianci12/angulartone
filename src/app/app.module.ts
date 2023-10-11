import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToneComponent } from './tone/tone.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaypausestopComponent } from './playpausestop/playpausestop.component';
import { IsTonePipe } from './pipes/istone.pipe';
import { GettonePipe } from './pipes/gettone.pipe';
import { GotoComponent } from './goto/goto.component';
import { IsgotoPipe } from './pipes/isgoto.pipe';
import { GetgotoPipe } from './pipes/getgoto.pipe';
import { DeleteComponent } from './delete/delete.component';
import { PianoComponent } from './piano/piano.component';
import { IsBlackNotePipe } from './pipes/is-black-note.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToneComponent,
    PlaypausestopComponent,
    IsTonePipe,
    GettonePipe,
    GotoComponent,
    IsgotoPipe,
    GetgotoPipe,
    DeleteComponent,
    PianoComponent,
    IsBlackNotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
