export const PORTFOLIO_LIST_ACTION_TYPES = {
    GET_PORTFOLIO_LIST: "GET_PORTFOLIO_LIST",
    GET_PORTFOLIO_LIST_SUCCESS: "GET_PORTFOLIO_LIST_SUCCESS",
    GET_PORTFOLIO_LIST_ERROR: "GET_PORTFOLIO_LIST_ERROR",
};

export const portfolioListActions = {
    getPortfolioList: () => ({
        type: PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST,
    }),
    getPortfolioListSuccess: (data) => ({
        type: PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST_SUCCESS,
        portfolioList: data
    }),
    getPortfolioListError: (err) => ({
        type: PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST_ERROR,
        error: err
    })
};