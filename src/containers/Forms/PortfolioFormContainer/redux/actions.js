export const PORTFOILIO_FORM_ACTION_TYPES = {
    ADD_PORTFOLIO: "ADD_PORTFOLIO",
    ADD_PORTFOLIO_SUCCESS: "ADD_PORTFOLIO_SUCCESS",
    ADD_PORTFOLIO_ERROR: "ADD_PORTFOIO_ERROR"

};

export const portfolioFormActions = {
    postPortfolio: () => ({
        type: PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO,
    }),
    postPortfolioSuccess: () =>({
        type: PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO_SUCCESS,
    }),
    postPortfolioError: (err) =>({
        type: PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO_ERROR,
        error: err,
    })

}
