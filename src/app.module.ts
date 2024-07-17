import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { DatabaseProviders } from 'shared-orm-library/src/database.providers';

@Module({
    imports: [
        DatabaseProviders,
        UsersModule
    ]
})

export class AppModule {}