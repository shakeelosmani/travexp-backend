import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from '@fastify/autoload';
import { FastifyPluginAsync, FastifyServerOptions } from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

export interface AppOptions extends FastifyServerOptions, Partial<AutoloadPluginOptions> {

}
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
  logger: true
}

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
  // Place here your custom code!
  void fastify.register(cors, {
    origin: true
  })

  void fastify.register(swagger, {
    swagger: {
      info: {
        title: 'Travelexp API',
        description: 'Travelexp API',
        version: '0.1.0'
      },
      host: 'localhost:8200',
      schemes: ['http'],
    },
    mode: 'dynamic'
  })

  void fastify.register(swaggerUi, {
    routePrefix: '/docs',
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })

};

export default app;
export { app, options }
