import { Model } from 'mongoose';
import { INoticia } from '../../dist/noticia/interfaces/noticia.interface';
import { HttpService } from '@nestjs/axios';
export declare class NoticiaService {
    private readonly httpService;
    private readonly noticiaModel;
    constructor(httpService: HttpService, noticiaModel: Model<INoticia>);
    getNoticias(): Promise<INoticia[]>;
    getNoticia(noticiaID?: string): Promise<INoticia>;
    deleteNoticia(noticiaID: string): Promise<INoticia>;
    saveNoticia(noticia: INoticia): Promise<INoticia>;
    cambiaCadahora(): Promise<void>;
}
