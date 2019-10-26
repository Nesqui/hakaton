import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            login: "",
            pass: ""
        },
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        addUser() {
            firebase
                .database()
                .ref(`clients/`)
                .push({
                    login: `test`,
                    password: `test`
                });
        },
        auth({
            commit
        }, fields) {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    console.log(`fields`, fields);

                    for (let element in data) {
                        console.log(`vot`, data[element]);
                        if (data[element].login === fields.login && data[element].password === fields.password) {
                            commit('setUser', data[element]);
                        } else console.log(element);
                    }
                });
        }
    },
    getters: {
        isAuth(state) {
            return state.user.login ? true : false
        }
    },
    modules: {}
})