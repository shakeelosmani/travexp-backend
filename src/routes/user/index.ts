import { FastifyPluginAsync } from "fastify"
import { container } from "../../configs/di-config"
import { UserResponse } from "../../models/view-models/UserViewModel"
import { UserService, UserServiceSymbol } from "../../services/UserServce";

const UserController: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	const diConatiner = container;
	fastify.get<{Params: {uid: string}}>(
		"/:uid",
		{
			schema: {
				response: {200: UserResponse}
			}
		},
		async (request, reply) => {
			const uid = request.params.uid;
			const user = await diConatiner.get<UserService>(UserServiceSymbol).getUserByUid(uid);
			if (user) {
				reply.status(200).send(user);
			} else {
				reply.status(404).send();
			}
		}
	)
}

export default UserController;