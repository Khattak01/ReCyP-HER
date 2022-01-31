import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "game",
    initialState: {
        members: [],
        gameStages: [],
        gameCurrentStage: "",
        loading: false,
    },
    reducers: {
        addTeamMember: (game, { payload }) => {
            if (game.members.length < 4) game.members.push(payload);
        },

        removeTeamMember: (game, { payload }) => {
            return game.members.filter((game) => game.id !== payload);
        },

        setGameStage: (game, { payload }) => {
            game.gameCurrentStage = payload;
        },
    },
});

export const { addTeamMember, removeTeamMember, setGameStage } = slice.actions;

export default slice.reducer;
