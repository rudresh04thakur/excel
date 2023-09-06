/**
 *
 * @param {object} DashboardRouter
 * @param {ExpressRouter} DashboardRouter.router
 * @param {DashboardController} DashboardRouter.DashboardController
 * @param {DashboardValidator} DashboardRouter.DashboardValidator
 * @param {makeExpressCallback} DashboardRouter.makeExpressCallback
 * @param {makeValidatorCallback} DashboardRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
module.exports = ({
  router,
  DashboardController,
  DashboardValidator,
  makeValidatorCallback,
  makeExpressCallback,
}) => {
  router.post(
    '/',
    makeExpressCallback(DashboardController.list)
  );
  return router;
};
