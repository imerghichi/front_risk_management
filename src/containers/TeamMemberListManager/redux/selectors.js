import { createSelector } from 'reselect';
const storeName = 'teamMemberList';

export const teamMemberListSelector = createSelector(
    state => state[storeName],
    state => state.teamMemberList
);

export const teamMemberListSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const teamMemberListErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const teamMemberListLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
