<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> Roaddata - under construction </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="row">
      <!-- ***** Preloader Start ***** -->
      <div id="preloader">
        <div class="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- ***** Preloader End ***** -->

      <router-view />

      <footer style="min-height: 750px" class="column justify-between">
        <!-- ***** Contact Form Start ***** -->
        <div
          id="TrialForm"
          class="contact-form q-ml-lg q-mb-lg"
          style="max-width: 600px"
        >
          <div class="row q-gutter-md justify-center">
            <div class="col-md-6 col-sm-12">
              <q-input
                label="E-Mail Adress"
                outlined
                type="email"
                v-model="email"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </div>
            <div class="col-md-6 col-sm-12 q-mb-lg">
              <q-input
                label="Password"
                outlined
                type="password"
                v-model="password"
                hint="Will be used for your first login, after release."
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </div>
            <div class="col-md-6 col-sm-12 q-mb-lg">
              <q-checkbox
                v-model="agree"
                label="I agree to the terms and conditions."
              ></q-checkbox>
            </div>
            <div class="col-lg-12 q-mt-lg">
              <q-btn
                color="primary"
                rounded
                size="md"
                @click="registerWithEmail()"
                >Request free trial</q-btn
              ><br /><br />
              <q-btn
                color="secondary"
                @click="signInWithGoogle()"
                rounded
                size="md"
                >Register with Google</q-btn
              >
            </div>
          </div>
        </div>
        <!-- ***** Contact Form End ***** -->

        <!-- ***** Footer Start ***** -->
        <div class="container q-px-md">
          <div class="row">
            <div class="col-lg-12">
              <div class="sub-footer">
                <router-link class="q-mr-sm" to="/Privacy">Privacy</router-link>
                <router-link class="q-mr-sm" to="/Imprint">Imprint</router-link>
                <router-link to="/Disclaimer">Disclaimer</router-link>
                <p>
                  Copyright &copy; 2023 Roadtrip Insights | Roaddata | Travel
                  Insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { auth } from '../scripts/firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

  mounted() {
    setTimeout(() => {
      document.getElementById('preloader')?.remove();
    }, 1000);
  },

  data() {
    return {
      email: '',
      password: '',
      agree: false,
    };
  },
  methods: {
    signInWithGoogle() {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then(() => {
          Notify.create({
            message: 'You have successfully registered for the trial.',
            color: 'positive',
            icon: 'check',
          });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorMessage = error.message;

          Notify.create({
            message: errorMessage,
            color: 'negative',
            icon: 'warning',
          });
        });
    },
    registerWithEmail() {
      if (this.email === '' || this.password === '') {
        Notify.create({
          message: 'Please enter your email address and password.',
          color: 'negative',
          icon: 'warning',
        });
        return;
      }

      if (!this.agree) {
        Notify.create({
          message: 'Please agree to the terms and conditions.',
          color: 'negative',
          icon: 'warning',
        });
        return;
      }

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          Notify.create({
            message: 'You have successfully registered for the trial.',
            color: 'positive',
            icon: 'check',
          });
        })
        .catch((error) => {
          const errorMessage = error.message;

          Notify.create({
            message: errorMessage,
            color: 'negative',
            icon: 'warning',
          });
        });
    },
  },
});
</script>
