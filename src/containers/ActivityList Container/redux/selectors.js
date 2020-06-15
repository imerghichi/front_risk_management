import { createSelector } from 'reselect';
const storeName = 'activityList';

export const activityListSelector = createSelector(
    state => state[storeName],
    state => state.activityList
);

export const activityListSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const activityListErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const activityListLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
export const riskforactivitySelector = createSelector(
        state => state[storeName],
        state =>state.riskListActivity
) ;
export const riskforactivityErrorSelector = createSelector(
    state => state[storeName],
    state =>state.error
) ;
export const riskforactivityLoadingSelector = createSelector(
    state => state[storeName],
    state =>state.loading
) ;
export const id_activitySelector = createSelector(
    state => state[storeName],
    state =>state.id_activity,
)

