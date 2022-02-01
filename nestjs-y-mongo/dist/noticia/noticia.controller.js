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
exports.NoticiaController = void 0;
const common_1 = require("@nestjs/common");
const noticia_service_1 = require("./noticia.service");
let NoticiaController = class NoticiaController {
    constructor(noticiaService) {
        this.noticiaService = noticiaService;
    }
    async getNoticias(res) {
        const Noticias = await this.noticiaService.getNoticias();
        return res.status(common_1.HttpStatus.OK).json(Noticias);
    }
    async deleteNoticia(res, body) {
        const Noticias = await this.noticiaService.deleteNoticia(body._id);
        return res.status(common_1.HttpStatus.OK).json(Noticias);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticiaController.prototype, "getNoticias", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoticiaController.prototype, "deleteNoticia", null);
NoticiaController = __decorate([
    (0, common_1.Controller)('noticia'),
    __metadata("design:paramtypes", [noticia_service_1.NoticiaService])
], NoticiaController);
exports.NoticiaController = NoticiaController;
//# sourceMappingURL=noticia.controller.js.map