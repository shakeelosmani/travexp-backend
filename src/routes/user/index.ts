import { FastifyPluginAsync } from "fastify"
import { container } from "../../configs/di-config"
import { UserResponse } from "../../models/view-models/UserViewModel"
import { UserService, UserServiceSymbol } from "../../services/UserServce";

const UserController: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	const diConatiner = container;
	fastify.get<{Params: {uid: string}}>(
		"/uid/:uid",
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

	fastify.get<{Params: {email: string}}>(
		"/email/:email",
		{
			schema: {
				response: {200: UserResponse}
			}
		},
		async (request, reply) => {
			const email = request.params.email;
			const user = await diConatiner.get<UserService>(UserServiceSymbol).getUserByEmail(email);
			if (user) {
				reply.status(200).send(user);
			} else {
				reply.status(404).send();
			}
		}
	)

	fastify.post<{Body: UserResponse}>(
		"/",
		{
			schema: {
				body: UserResponse,
			}
		},
		async (request, reply) => {
			const user = request.body;
			const newUser = await diConatiner.get<UserService>(UserServiceSymbol).saveUser(user);
			if (newUser) {
				reply.status(200).send(newUser);
			} else {
				reply.status(500).send();
			}
		}
	)
}

export default UserController;