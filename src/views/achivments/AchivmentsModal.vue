<template>
  <div>
    <!-- Large modal -->
    <mdb-modal size="lg" :show="showModal" @close="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title w-100 text-center" id="myModalLabel">Все достижения</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="achievs d-flex justify-content-center flex-wrap">
            <!-- 1st -->
            <li
              class="achievs__item achieve"
              v-for="(achivment, index) in achivments"
              :key="index"
              data-id="1"
            >
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-1.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">Сутки транзакций без комиссии</h3>
                  <p
                    class="achieve__desc"
                  >Выдаётся за регистрацию {{showStaffCount(achivment.wasBonused)}} зарплатных карт</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="300"
                  aria-valuemin="0"
                  aria-valuemax="1000"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">1000</span>/
                <span class="progress__val--all">1000</span>
              </div>
            </li>
            <!-- 2nd -->
            <li class="achievs__item achieve achieve--complete" data-id="2">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-2.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">Скидка на обслуживание 4000 руб</h3>
                  <p class="achieve__desc">Выдаётся за каждые 10 сотрудников</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="30"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">20</span>/
                <span class="progress__val--all">30</span>
                <span class="progress__val--unit">(+1)</span>
              </div>
            </li>
            <!-- 3nd -->
            <li class="achievs__item achieve" data-id="3">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-3.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">+ 2% на остаток по счёту</h3>
                  <p class="achieve__desc">Положительный баланс в течении месяца</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="30"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">20</span>/
                <span class="progress__val--all">30</span>
                <span class="progress__val--unit">(+1)</span>
              </div>
            </li>
            <!-- 4nd -->
            <li class="achievs__item achieve" data-id="4">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-4.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">Выдача наличных за 1% от суммы</h3>
                  <p class="achieve__desc">Оборот от 1 000 000 руб.</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="30"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">20</span>/
                <span class="progress__val--all">30</span>
                <span class="progress__val--unit">(+1)</span>
              </div>
            </li>
            <!-- 5nd -->
            <li class="achievs__item achieve" data-id="5">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-1.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">Сутки транзакций без комиссии</h3>
                  <p class="achieve__desc">Выдаётся за каждые 1000 транзакций</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="300"
                  aria-valuemin="0"
                  aria-valuemax="1000"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">1000</span>/
                <span class="progress__val--all">1000</span>
              </div>
            </li>
            <!-- 6nd -->
            <li class="achievs__item achieve achieve--complete" data-id="6">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-2.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">Скидка на обслуживание 4000 руб</h3>
                  <p class="achieve__desc">Выдаётся за каждые 10 сотрудников</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="30"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">20</span>/
                <span class="progress__val--all">30</span>
                <span class="progress__val--unit">(+1)</span>
              </div>
            </li>
            <!-- 7nd -->
            <li class="achievs__item achieve" data-id="7">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-3.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">+ 2% на остаток по счёту</h3>
                  <p class="achieve__desc">Положительный баланс в течении месяца</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="30"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">20</span>/
                <span class="progress__val--all">30</span>
                <span class="progress__val--unit">(+1)</span>
              </div>
            </li>
            <!-- 8nd -->
            <li class="achievs__item achieve" data-id="8">
              <div class="achieve__content">
                <p class="img-wrap">
                  <img class="achieve__img" src="./achieve-4.svg" width="32" height="32" alt="icon" />
                </p>
                <div class="achieve__info">
                  <h3 class="achieve__title">Выдача наличных за 1% от суммы</h3>
                  <p class="achieve__desc">Оборот от 1 000 000 руб.</p>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="30"
                ></div>
              </div>
              <div class="progress__vals">
                <span class="progress__val--curr">20</span>/
                <span class="progress__val--all">30</span>
                <span class="progress__val--unit">(+1)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </mdb-modal>
  </div>
</template>

<script>
import { mdbModal } from "mdbvue";
export default {
  props: {
    showModal: {
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit(`closeModal`);
    },
    showStaffCount(bonus) {
      for (let index = 0; index < this.targets["zp"].length; index++) {
        const element = this.targets["zp"][index];
        if (+element.bonus === +bonus) {
          return element.max;
        }
      }
    }
  },
  computed: {
    achivments() {
      return this.$store.state.user.achivments;
    },
    targets() {
      return this.$store.state.targets;
    }
  },
  components: {
    mdbModal
  }
};
</script>

<style scoped>
.sidebar__content {
  width: 360px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 13px;
  padding-bottom: 13px;
  outline: 1px solid gray;
}
li {
  width: 300px
}
li:nth-child(odd){
  margin-right:30px;
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
}

.sidebar__title {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  color: #109cf1;
}

.sidebar__period {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  letter-spacing: 0.01em;
}

.sidebar__period span {
  color: #109cf1;
  cursor: pointer;
}

.achievs__item:not(:last-child) {
  margin-bottom: 11px;
}

.img-wrap {
  display: flex;
}

.achievs {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 5px;
}

.achieve__content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.achieve__info {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;

  letter-spacing: 0.01em;
  color: #334d6e;
}

.achieve .img-wrap {
  margin-right: 15px;
}

.achieve__title {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 0;

  letter-spacing: 0.01em;
  color: #334d6e;
}

.achieve__desc {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin: 0;

  letter-spacing: 0.01em;
  color: #6a707e;
}

.achieve--complete .achieve__desc {
  color: #2ed47a;
}

.progress {
  height: 4px;
  margin-bottom: 3px;
}

.progress-bar {
  background-color: #2ed47a;
  height: 4px;
}

.progress__vals {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 13px;

  text-align: center;
  letter-spacing: 0.01em;

  color: #6a707e;
}

.achievs__link {
  display: block;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  margin: 0;

  letter-spacing: 0.01em;
  color: #109cf1;
}
</style>