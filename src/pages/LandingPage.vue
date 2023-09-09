<template>
  <body>
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="index.html" class="logo"> Lava </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section">
                  <a href="#welcome" class="menu-item">Home</a>
                </li>
                <li class="scroll-to-section">
                  <a href="#about" class="menu-item">About</a>
                </li>
                <li class="scroll-to-section">
                  <a href="#testimonials" class="menu-item">Testimonials</a>
                </li>
                <li class="submenu">
                  <a href="javascript:;">Drop Down</a>
                  <ul>
                    <li><a href="" class="menu-item">About Us</a></li>
                    <li><a href="" class="menu-item">Features</a></li>
                    <li><a href="" class="menu-item">FAQ's</a></li>
                    <li><a href="" class="menu-item">Blog</a></li>
                  </ul>
                </li>
                <li class="scroll-to-section">
                  <a href="#contact-us" class="menu-item">Contact Us</a>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <!-- ***** Welcome Area Start ***** -->
    <div class="welcome-area q-px-md" id="welcome">
      <!-- ***** Header Text Start ***** -->
      <div class="header-text">
        <div class="container">
          <div class="row">
            <div
              class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <h1>
                Data insights from <em class="text-primary">Roadtrips</em>
              </h1>
              <p>
                Get valueable data for your business from travelers around the
                world. Find out when your customers are traveling, where they
                are going, and how long they are staying.
              </p>
              <q-btn rounded size="lg" color="primary">Try now</q-btn>
            </div>
          </div>
        </div>
      </div>
      <!-- ***** Header Text End ***** -->
    </div>
    <!-- ***** Welcome Area End ***** -->

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="about">
      <div class="container q-px-md">
        <div class="row q-gutter-md q-gutter-y-lg justify-around">
          <div class="col-lg-3 col-md-5 col-sm-8 col-xs-12">
            <q-card class="q-pa-md text-center" style="height: 430px">
              <h2 class="text-left full-width text-accent">01</h2>
              <div class="column justify-center">
                <div class="q-gutter-md">
                  <q-icon name="route" size="xl" />
                  <h4>Travelling routes</h4>
                  <p>
                    See where your customers are coming from and where they are
                    going.
                  </p>
                  <q-btn label="Discover More" rounded color="primary" />
                </div>
              </div>
            </q-card>
          </div>
          <div
            class="col-lg-3 col-md-5 col-sm-8 col-xs-12"
            data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
          >
            <q-card class="q-pa-md text-center" style="height: 430px">
              <h2 class="text-left full-width text-accent">02</h2>
              <div class="column justify-center">
                <div class="q-gutter-md">
                  <q-icon name="hotel" size="xl" />
                  <h4>Overnight locations</h4>
                  <p>
                    Find out where your customers are staying and how long they
                    are staying. Get insights about the most popular
                    accomodation types.
                  </p>
                  <q-btn label="Discover More" rounded color="primary" />
                </div>
              </div>
            </q-card>
          </div>
          <div
            class="col-lg-3 col-md-5 col-sm-8 col-xs-12"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <q-card class="q-pa-md text-center" style="height: 430px">
              <h2 class="text-left full-width text-accent">03</h2>
              <div class="column justify-center">
                <div class="q-gutter-md">
                  <q-icon name="schedule" size="xl" />
                  <h4>Dwell time</h4>
                  <p>
                    Find out how long your customers are staying at a specific
                    region.
                  </p>
                  <q-btn label="Discover More" rounded color="primary" />
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Features Big Item End ***** -->

    <div class="left-image-decor"></div>

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="promotion">
      <div class="container q-px-md">
        <div class="row">
          <div
            class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix"
          >
            <ul>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src="../landing-page-assets/images/about-icon-01.png"
                  alt=""
                />
                <div class="text">
                  <h4>1. Data Collection</h4>
                  <p>
                    Our data is generated by thousands of users of our Roadtrip
                    planning tool. We help our users plan their custom route and
                    create their personal roadtrip. The data is sent anonymously
                    to Roaddata.
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.5s"
              >
                <img
                  src="../landing-page-assets/images/about-icon-02.png"
                  alt=""
                />
                <div class="text">
                  <h4>2. Data Processing</h4>
                  <p>
                    The received data gets processed and prepared for
                    visualisation once a day for every trip. We analyse trends
                    and patterns in the data and make it available for you.
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
              >
                <img
                  src="../landing-page-assets/images/about-icon-03.png"
                  alt=""
                />
                <div class="text">
                  <h4>3. Data visualisation</h4>
                  <p>
                    The data is visualised in a dashboard that is easy to
                    understand and use. You can filter the data by date, region
                    and other parameters.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Features Big Item End ***** -->

    <div class="right-image-decor"></div>

    <section class="q-px-md">
      <div class="heading q-my-xl">
        <h2 style="text-align: left">More about <em>Roadtrip Insights</em></h2>

        <p>
          We have been working on our roadtrip planning tool for over 4 years
          now. We helped thousands of travelers to plan their roadtrip, which
          generated more thant 7000 worldwide and unique trips. <br /><br />
          This generates a lot of valuable data that can be used for your
          business. Now we want to help you to get insights from this valuable
          data.
        </p>
      </div>
    </section>

    <!-- ***** Testimonials Starts ***** -->
    <section class="section" id="testimonials">
      <div class="container q-px-md">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="center-heading">
              <h2>Start your trial now for <em>free</em></h2>
              <p>
                Roaddata is currently in development and will be available soon,
                but you can already register for a free trial.
              </p>
              <br />
              <p>
                If you register now with your email address, you can use our
                tool one month for free after its release. No hidden costs, no
                credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Testimonials Ends ***** -->
  </body>
</template>

<style>
@import url('../landing-page-assets/css/landing-page.css');
</style>
