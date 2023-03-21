"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRepository = exports.CUSTOM_TYPEORM_REPOSITORY = void 0;
const common_1 = require("@nestjs/common");
exports.CUSTOM_TYPEORM_REPOSITORY = 'CUSTOM_TYPEORM_REPOSITORY';
function CustomRepository(entity) {
    return (0, common_1.SetMetadata)(exports.CUSTOM_TYPEORM_REPOSITORY, entity);
}
exports.CustomRepository = CustomRepository;
//# sourceMappingURL=customTypeOrm.decorator.js.map