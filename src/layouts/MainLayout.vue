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
        <div class="contact-form q-ml-lg q-mb-lg" style="max-width: 600px">
          <div class="row q-gutter-md justify-center">
            <div class="col-md-6 col-sm-12">
              <q-input label="Full name" outlined="" :model-value="name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </div>
            <div class="col-md-6 col-sm-12 q-mb-lg">
              <q-input label="E-Mail Adress" outlined :model-value="email">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </div>
            <div class="col-lg-12 q-mt-lg">
              <q-btn color="primary" rounded size="lg"
                >Request free trial</q-btn
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
                <p>Copyright &copy; 2023 Roadtrip Insights | Roaddata</p>
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

export default defineComponent({
  name: 'MainLayout',

  mounted() {
    setTimeout(() => {
      document.getElementById('preloader')?.remove();
    }, 1000);
  },
});
</script>
