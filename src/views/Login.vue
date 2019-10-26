<template>
  <div class="login">
    <div class="container">
      <header class="header">
        <div class="logo">
          <a class="logo__link" href="index.html">SibCity</a>
        </div>
      </header>
      <div class="login-main">
        <div class="slogan">Управляй банковскими продуктами играючи</div>
        <div class="login-form">
          <form class="form" action="#" method="get" name="login-form">
            <p class="logo">SibCity</p>
            <h2 class="login-form__title">Вход в личный кабинет</h2>
            <p class="form__group">
              <label for="phone">Ваш номер телефона</label>
              <input
                class="text-field"
                type="text"
                id="phone"
                name="phone"
                placeholder="+ 7 (XXX) XXX-XX-XX"
                v-model="fields.login"
                required
              />
            </p>
            <p class="form__group">
              <label for="pass">Пароль</label>
              <input
                class="text-field"
                type="password"
                id="pass"
                name="pass"
                placeholder="******"
                label="Ваш пароль"
                v-model="fields.password"
                required
              />
            </p>
            <a class="login-form__link" @click="auth">Войти в игру</a>
          </form>
        </div>
      </div>
      <div class="footer">
        <div class="footer__logos">
          <a class="logo__pixels" href="https://pixels.ru">
            <img src="../assets/pixels.svg" alt="pixels" />
          </a>
          <a class="logo__uralsib" href="https://uralsib.ru">
            <img src="../assets/uralsib-logo.svg" alt="uralsib" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      this.$store.dispatch("auth", this.fields);
    }
  }
};
</script>

<style lang="less" scoped>
/* ЛОГИН */

.login {
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  background-image: url("../assets/back.svg");
  background-repeat: no-repeat;
  background-position: center top;
  -webkit-background-size: cover;
  background-size: cover;
}

.login .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1254px;
  margin: 0 auto;
  padding-top: 58px;
  padding-bottom: 72px;
  /*background-color: #dee2e6;*/
}

.logo__link {
  font-family: "Lobster", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;

  color: #ffffff;
  opacity: 0.9;
}

.logo__link:hover,
.logo__link:focus {
  color: #ffffff;
}

.login-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slogan {
  width: 436px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 31px;
  line-height: 46px;
}

.login-form {
  width: 403px;
  background: #ebfbf2;

  margin-right: 86px;
  padding: 36px 40px 44px;
  border-radius: 8px;
}

.login-form .logo {
  font-family: "Lobster", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 49px;
  line-height: 61px;
  color: #2ed47a;
  margin: 0;
  margin-bottom: 7px;
}

.login-form p {
  margin: 0;
}

.login-form__title {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #334d6e;
  margin-bottom: 14px;
}

.login-form__link {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #2ed47a;
  border-radius: 4px;
  color: white;
  padding: 13px 20px;
}

.login-form__link:hover,
.login-form__link:focus {
  color: white;
}

.login-form label {
  display: block;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.01em;
}

.login-form .form__group {
  margin-bottom: 20px;
}

.login-form .text-field {
  width: 100%;
  border: 1px solid #a3c7d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 20px 12px 18px;
}

.footer__logos {
  display: flex;
  align-items: flex-end;
}

.logo__pixels {
  margin-right: 20px;
}
</style>
