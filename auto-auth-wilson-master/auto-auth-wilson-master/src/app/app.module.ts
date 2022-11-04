import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { SpotifyService } from './services/spotify/spotify.service';

import { AppRouting } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRouting],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
