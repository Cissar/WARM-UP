import { NoticiaService } from './noticia.service';
export declare class NoticiaController {
    private noticiaService;
    constructor(noticiaService: NoticiaService);
    getNoticias(res: any): Promise<any>;
    deleteNoticia(res: any, body: any): Promise<any>;
}
