import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface FavoritePhotosState {
    value: string[];
    liked?: boolean;
}

const initialState: FavoritePhotosState = {
    value: [],
};

export const addPhoto = createSlice({
    name: 'favoritePhotos',
    initialState,
    reducers: {
        addOrRemoveFavoritePhoto: (state, action: PayloadAction<string>) => {
            console.log('addOrRemoveFavoritePhoto REDUX!! ', { state, action })

            const { payload: currentPhoto } = action;
            const isLiked = state.value.find((element: string) => element === currentPhoto);
            if (isLiked) {
                const index = state.value.indexOf(currentPhoto);
                if (index > -1)
                    state.value.splice(index, 1);
            } else {
                state.value.push(action.payload);
            }
            localStorage.setItem('favoritePhotos', JSON.stringify(state.value));
        },
        isLiked: (state, action: PayloadAction<string>) => {
            const { payload: currentPhoto } = action;
            const isLiked = state.value.find((element: string) => element === currentPhoto);
            state.liked = !!isLiked;
            console.log('IsLiked REDUX!! ', { state, action })
        },
        loadFavoritePhotos: (state) => {
            const favoritePhotos = localStorage.getItem('favoritePhotos');
            if (!favoritePhotos)
                localStorage.setItem('favoritePhotos', '[]');

            state.value = JSON.parse(favoritePhotos || '[]');
        }
    },
});

export const { addOrRemoveFavoritePhoto, isLiked, loadFavoritePhotos } = addPhoto.actions;

export const selectFavoritePhotos = (state: RootState) => state.favoritePhotos.value;

export const selectLikedPhoto = (state: RootState) => state.favoritePhotos.liked;

export default addPhoto.reducer;
