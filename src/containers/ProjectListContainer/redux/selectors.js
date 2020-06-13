import { createSelector } from 'reselect';
const storeName = 'projectList';

export const projectListSelector = createSelector(
    state => state[storeName],
    state => state.projectList
);

export const projectListSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const projectListErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const projectListLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
export const activitiesforporjectSelector = createSelector(
    state => state[storeName],
    state => state.activityListforProject
);

export const activitiesforprojectSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const activitiesforprojectErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const activitiesforprojectLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
