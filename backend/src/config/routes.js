const express = require('express')

module.exports = function(server) {

    // Define URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Cicle de Pagamento
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}