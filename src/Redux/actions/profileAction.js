export const CHANGE_NICK = "@@profile/CHANGE_NICK";

export const changeNick = (nickName) => ({
    type: CHANGE_NICK,
    payload: {
        nickName
    }
});