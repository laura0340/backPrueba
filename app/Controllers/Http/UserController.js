'use strict'
const User = use('App/Models/User');

class UserController {
    async login({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async store({ request }) {
        const { email, password, nombre, numeroId, celular, departamento, ciudad, barrio, direccion, salario, otrosIngresos, gastosMensuales, gastosFinancieros } = request.all();
        const user = await User.create({
            username: email,
            email,
            password,
            nombre,
            numeroId,
            celular,
            departamento,
            ciudad,
            barrio,
            direccion,
            salario,
            otrosIngresos,
            gastosMensuales,
            gastosFinancieros
        });
        return user;
    };
}

module.exports = UserController
