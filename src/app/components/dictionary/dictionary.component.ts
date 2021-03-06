import { DictionaryService } from './../../services/dictionary.service';
import { IWord } from './../../services/IWord';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: IWord;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  search(word: string) {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning
    };
  }

}
