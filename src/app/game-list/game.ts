import { Category } from '../game-list-filter/category';
import { Editor } from '../game-list-filter/editor';

interface GameBase {
    id: number;
  
    name: string;
  
    description: string;
  
    image: string;
  
    /** Note/10. */
    note: number;


  }

  export interface Game extends GameBase{
    genres: Category[];
    editor: Editor;  
  }


  export interface GameDTO extends GameBase{
    genres: number[];
    publisher: number;  
  }


