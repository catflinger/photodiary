import { Injectable } from '@angular/core';

@Injectable() export class Utils {
    
    constructor() {

    }

    public clearSelection () : void {
        if(window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
        }
    }
}