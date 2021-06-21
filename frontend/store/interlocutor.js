export const state = () => ({
  interlocutors: [],
  currentInterlocutorUsername: null,
})

export const mutations = {
  setCurrentInterlocutorUsername(state, payload) {
    state.currentInterlocutorUsername = payload.username
  },
  setInterlocutors(state, payload) {
    state.interlocutors = payload.interlocutors
  },
  addInterlocutor(state, payload) {
    state.interlocutors = [
      ...state.interlocutors.filter(
        (interlocutor) =>
          interlocutor.username !== payload.interlocutor.username
      ),
      payload.interlocutor,
    ]
  },
  deleteInterlocutor(state, payload) {
    state.interlocutors = state.interlocutors.filter(
      (interlocutor) => interlocutor.username !== payload.interlocutor.username
    )
  },
}
