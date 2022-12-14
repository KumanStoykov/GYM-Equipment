import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '../../shared/interfaces';
import { IAuthState } from './reducers';


export const selectorFeature = createFeatureSelector<IAuthState>('auth');


export const selectUser = createSelector(
    selectorFeature,
    (state: IAuthState) => <IUser>state.user
);

export const selectMessage = createSelector(
    selectorFeature,
    (state: IAuthState) => state.message
);
