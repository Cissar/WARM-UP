"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const schedule_1 = require("@nestjs/schedule");
const axios_1 = require("@nestjs/axios");
let NoticiaService = class NoticiaService {
    constructor(httpService, noticiaModel) {
        this.httpService = httpService;
        this.noticiaModel = noticiaModel;
    }
    async getNoticias() {
        try {
            const Noticias = await this.noticiaModel.find().limit(10);
            return Noticias;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getNoticia(noticiaID) {
        const Noticia = await this.noticiaModel.findById(noticiaID);
        return Noticia;
    }
    async deleteNoticia(noticiaID) {
        return await this.noticiaModel.deleteOne({ _id: noticiaID });
    }
    async saveNoticia(noticia) {
        try {
            return await new this.noticiaModel(noticia);
        }
        catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
    async cambiaCadahora() {
        this.httpService
            .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
            .subscribe(async (response) => {
            const hits = response.data.hits;
            hits.map(async (element) => {
                if (!element.title && !element.story_title) {
                    return;
                }
                else {
                    const data = await this.saveNoticia({
                        created_at: 'element.created_at',
                        title: element.title ? element.title : 'Title',
                        author: element.author
                    });
                    data.save();
                }
            });
        });
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticiaService.prototype, "cambiaCadahora", null);
NoticiaService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)('Noticias')),
    __metadata("design:paramtypes", [axios_1.HttpService,
        mongoose_1.Model])
], NoticiaService);
exports.NoticiaService = NoticiaService;
//# sourceMappingURL=noticia.service.js.map