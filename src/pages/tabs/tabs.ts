import { LibraryPage } from './../library/library';
import { FavouritesPage } from './../favourites/favourites';
import { Component } from '@angular/core';


@Component({
    selector : 'page-tabs',
    templateUrl : 'tabs.html'
        
})
export class TabsPage {

    favouritesPage=FavouritesPage;
    libraryPage=LibraryPage;
}