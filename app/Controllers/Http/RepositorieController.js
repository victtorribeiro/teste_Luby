'use strict'

const Repository = use("App/Models/Repositorie")
const User = use("App/Models/User")

class RepositorieController {
    async index({ }) {
        const repository = await Repository.query().fetch()
        return repository
    }
    async show({ params }) {
        const repository = await Repository.query().where("name", params.name).firstOrFail()
        return repository
    }
    async store({ request, auth }) {

        const name_concat = (request.only(["name"]))
        const data = request.only(["name", "description", "public"])
        const repository = await Repository.create({ user_id: auth.user.id, ...data, slug: `/${auth.user.name}/${name_concat.name}` })
        return repository
    }
    async update({ request, params }) {
        const data = request.only(["name", "description", "public"])
        const repository = await Repository.query().where("name", params.name).firstOrFail()
        repository.merge({ user_id: auth.user.id, ...data })
        await repository.save()
        return repository
    }
    async destroy({ response, params }) {
        const repository = await Repository.query().where("name", params.name).delete()
        return response.status(200).json("Reposirorio deletado com sucesso!")
    }
}

module.exports = RepositorieController
