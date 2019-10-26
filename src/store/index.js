import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        addUser() {
            firebase
                .database()
                .ref('Payments/' + `clients/`)
                .push({
                    test: `test`
                });
        },
        auth({
            commit
        }, login = null, password = null) {
            firebase
                .database()
                .ref('clients/')
                .once('value', snapshot => {
                    let data = snapshot.val();
                    let tableData = [];
                    for (let element in data) {
                        if (element === login) console.log(element);
                        if (element === password) {
                            console.log(`da verno`);

                        }
                        console.log(data);

                    }
                    commit('setUsersByAgent', tableData);
                });
        }
    },
    modules: {}
})