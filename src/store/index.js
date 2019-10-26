import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import store from "../store";
import { Toast } from "toaster-js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            login: "",
            pass: ""
        },
        targets: {},
        uid: ""
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        logout(state) {
            state.user = {}
        },
        setTargets(state, payload) {
            state.targets = payload
        },
        setUid(state, payload) {
            state.uid = payload
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
        addZpHistory({ commit }, value) {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    console.log(`polychil`, commit, value);

                    data[store.state.uid].history.push({
                        bonus: value,
                        type: "zp"
                    });
                    firebase
                        .database()
                        .ref(`clients/` + store.state.uid)
                        .set(data[store.state.uid])
                        .then(() => {
                            new Toast(`Получен бонус от SibCity в размере: ` + value + ` SibCoin`)
                        })
                })
        },
        addStaff() {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    console.log(data);
                    data[store.state.uid].employees_amount++;
                    return firebase
                        .database()
                        .ref(`clients/` + store.state.uid)
                        .set(data[store.state.uid]);
                })

        },
        getUsers({
            commit
        }) {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    commit('setUser', data[store.state.uid]);
                })
                .then(() => {
                    new Toast("Сотрудник добавлен!");
                })
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
                        if (data[element].login === fields.login && data[element].password === fields.password) {
                            commit('setUser', data[element]);
                            commit(`setUid`, element)
                            founded = true;
                            new Toast('Добро пожаловать', {
                                /* some option */
                            });
                            break;
                        }
                    }
                    if (!founded) new Toast('Логин или пароль неверный', {
                        /* some option */
                    });

                });
        },
        getTargets({
            commit
        }) {
            return firebase
                .database()
                .ref('targets/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    commit(`setTargets`, data)
                })
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