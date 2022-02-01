"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiaModule = void 0;
const common_1 = require("@nestjs/common");
const noticia_controller_1 = require("./noticia.controller");
const noticia_service_1 = require("./noticia.service");
const mongoose_1 = require("@nestjs/mongoose");
const noticia_schema_1 = require("./schemas/noticia.schema");
const axios_1 = require("@nestjs/axios");
let NoticiaModule = class NoticiaModule {
};
NoticiaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Noticias', schema: noticia_schema_1.NoticiaSchema }
            ])
        ],
        controllers: [noticia_controller_1.NoticiaController],
        providers: [noticia_service_1.NoticiaService]
    })
], NoticiaModule);
exports.NoticiaModule = NoticiaModule;
//# sourceMappingURL=noticia.module.js.map