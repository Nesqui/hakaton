import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import store from "../store";
import {
    bus
} from '../bus'
import {
    Toast
} from "toaster-js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            login: "",
            pass: "",
            achivments: [],
            history: []
        },
        targets: {},
        uid: "",
        transactions: [],
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        logout(state) {
            state.user = {
                achivments: [],
                history: []
            }
        },
        setTargets(state, payload) {
            state.targets = payload
        },
        setUid(state, payload) {
            state.uid = payload
        },
        setTransactions(state, payload) {
            state.transactions = payload
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
        addZpHistory({
            commit
        }, value) {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    if (!data[store.state.uid].achivments)
                        data[store.state.uid].achivments = [{
                            type: "zp",
                            activated: false,
                            wasBonused: value
                        }]
                    else
                        data[store.state.uid].achivments.push({
                            type: "zp",
                            activated: false,
                            wasBonused: value
                        })

                    if (!data[store.state.uid].history) {
                        data[store.state.uid].history = [{
                            bonus: value,
                            type: "zp"
                        }]
                    } else
                        data[store.state.uid].history.push({
                            bonus: value,
                            type: "zp"
                        });
                    return firebase
                        .database()
                        .ref(`clients/` + store.state.uid)
                        .set(data[store.state.uid])
                        .then(() => {
                            new Toast(`Получен бонус от SibCity в размере: ` + value + ` SibCoin`)
                            return firebase
                                .database()
                                .ref('clients/')
                                .once('value', snapshot => {
                                    let data = snapshot.val();
                                    commit('setUser', data[store.state.uid]);
                                })
                        })
                })
        },
        createSuggest() {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    data[store.state.uid].suggests ? data[store.state.uid].suggests.push({
                        type: `zp`
                    }) : data[store.state.uid].suggests = [{
                        type: "zp"
                    }]
                    return firebase
                        .database()
                        .ref(`clients/` + store.state.uid)
                        .set(data[store.state.uid]);
                })
        },
        addMoney() {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();

                    data[store.state.uid].current_cash += 60000;
                    data[store.state.uid].transactions ? data[store.state.uid].transactions.push({
                        value: 60000
                    }) : data[store.state.uid].transactions = [{
                        value: 60000
                    }]
                    return firebase
                        .database()
                        .ref(`clients/` + store.state.uid)
                        .set(data[store.state.uid]);
                })

        },
        addStaff() {
            return firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();

                    data[store.state.uid].employees_amount++;
                    return firebase
                        .database()
                        .ref(`clients/` + store.state.uid)
                        .set(data[store.state.uid])
                        .then(() => {
                            bus.$emit('recieved')
                        })
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
        getTransactions({
            commit
        }) {
            return firebase
                .database()
                .ref('transactions/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    commit(`setTransactions`, data)
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