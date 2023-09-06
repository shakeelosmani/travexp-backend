// inversify container configuration:
import 'reflect-metadata';
import { Container } from 'inversify';
import {
	DefaultUserRepository,
	UserRepositoy,
	UserRepositorySymbol,
} from '../repos/UserRepo';
import {
	DefaultUserService,
	UserService,
	UserServiceSymbol,
} from '../services/UserServce';

const container = new Container({
	skipBaseClassChecks: true,
});

container
	.bind<UserRepositoy>(UserRepositorySymbol)
	.to(DefaultUserRepository)
	.inSingletonScope();
container
	.bind<UserService>(UserServiceSymbol)
	.to(DefaultUserService)
	.inSingletonScope();



export { container };
