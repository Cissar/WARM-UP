"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.NoticiaSchema = new mongoose_1.Schema({
    created_at: String,
    title: String,
    author: String,
});
//# sourceMappingURL=noticia.schema.js.map