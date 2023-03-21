"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTypeOrmModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const customTypeOrm_decorator_1 = require("./customTypeOrm.decorator");
class CustomTypeOrmModule {
    static forCustomRepository(repositories) {
        const providers = [];
        for (const repository of repositories) {
            const entity = Reflect.getMetadata(customTypeOrm_decorator_1.CUSTOM_TYPEORM_REPOSITORY, repository);
            if (!entity) {
                continue;
            }
            providers.push({
                inject: [(0, typeorm_1.getDataSourceToken)()],
                provide: repository,
                useFactory: (dataSource) => {
                    const baseRepository = dataSource.getRepository(entity);
                    return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
                },
            });
        }
        return {
            exports: providers,
            module: CustomTypeOrmModule,
            providers,
        };
    }
}
exports.CustomTypeOrmModule = CustomTypeOrmModule;
//# sourceMappingURL=customTypeOrm.module.js.map