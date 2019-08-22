import {createSelector} from 'reselect';

export const selectLoading = state => state.loading;

export const selectWiki = state => state.wiki;

export const selectWikiLoaded = state => state.loading;

export const selectWikiLoading = state => state.loaded;