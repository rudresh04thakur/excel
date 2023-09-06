const DashboardService = require('./dashboard.service');
const helper = require('../../utils/helper');

const DashboardController = {
  /**
   * Handle logging in user.
   * @async
   * @function
   * @param {ExpressRequest} httpRequest incoming http request
   * @returns {Promise.<ControllerResponse> }
   */
  list: async (httpRequest) => {
    const loginData = await DashboardService.list(httpRequest.body);
    return helper.generateResponse(loginData);
  },
};

module.exports = DashboardController;
