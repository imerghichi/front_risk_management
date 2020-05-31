
export const PORTFOLIO_LIST_ACTION_TYPES = {
    GET_PORTFOLIO_LIST: "GET_PORTFOLIO_LIST",
    GET_PORTFOLIO_LIST_SUCCESS: "GET_PORTFOLIO_LIST_SUCCESS",
    GET_PORTFOLIO_LIST_ERROR: "GET_PORTFOLIO_LIST_ERROR",

    ADD_PORTFOLIO: "ADD_PORTFOLIO",
    ADD_PORTFOLIO_SUCCESS: "ADD_PORTFOLIO_SUCCESS",
    ADD_PORTFOLIO_ERROR: "ADD_PORTFOIO_ERROR"
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
    }),
    postPortfolio: () => ({
        type: PORTFOLIO_LIST_ACTION_TYPES.ADD_PORTFOLIO,
    }),
    postPortfolioSuccess: () =>({
        type: PORTFOLIO_LIST_ACTION_TYPES.ADD_PORTFOLIO_SUCCESS,
    }),
    postPortfolioError: (err) =>({
        type: PORTFOLIO_LIST_ACTION_TYPES.ADD_PORTFOLIO_ERROR,
        error: err,
    })
};
