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
        },
        logout(state) {
            state.user = {}
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
                    let founded = false;
                    for (let element in data) {
                        console.log(`vot`, data[element]);
                        if (data[element].login === fields.login && data[element].password === fields.password) {
                            commit('setUser', data[element]);
                            founded = true;
                            Vue.toasted.show('Добро пожаловать', {
                                /* some option */
                            });
                            break;
                        }
                    }
                    if (!founded) Vue.toasted.show('Логин или пароль неверный', {
                        /* some option */
                    });

                });
        },
        logout({
            commit
        }) {
            commit(`logout`)
        }
    },
    getters: {
        isAuth(state) {
            return state.user.login ? true : false
        }
    },
    modules: {}
})