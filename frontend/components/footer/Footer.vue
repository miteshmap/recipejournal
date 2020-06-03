<template>
  <footer class="fluid">
    <b-container class="pt-5 pb-2">
      <b-row class="pb-2">
        <b-col md="4">
          <b-row>
            <div class="footer-logo mb-3 text-white">
              <img src="@/static/recipe-book-logo.png" width="50" />
              Recipe Journal
            </div>
            <p>
              RecipeJournal is a recipe and journal site where you can create
              your own personalised recipe journal using recipes from top food
              brands and chefs. Learn more about what makes us different from
              other recipe sites and cookbook products here.
            </p>
            <p>
              Check out some easy home recipes and get cooking.
            </p>
          </b-row>
          <b-row>
            <b-col cols="12" class="pl-0">
              <ul class="list-inline social-links">
                <li
                  v-for="(socialLink, socialLinkIndex) in socialLinks"
                  :key="socialLinkIndex"
                  class="list-inline-item"
                >
                  <b-link
                    :href="socialLink"
                    class="d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <fa-icon :icon="['fab', socialLinkIndex]" />
                  </b-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4">
          <h5 class="text-white">Most Popular</h5>
          <div class="posts">
            <div class="post d-flex">
              <img
                src="img/most-viewed-01.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html">
                    Lorem ipsum dolor sit amet
                  </a>
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
            <div class="post d-flex">
              <img
                src="img/most-viewed-02.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html">
                    Adipiscing elit, sed do eiusmod
                  </a>
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
            <div class="post d-flex">
              <img
                src="img/most-viewed-03.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html"
                    >Tempor incididunt ut labore et</a
                  >
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
            <div class="post d-flex">
              <img
                src="img/most-viewed-04.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html"
                    >Dolore magna aliqua. Non blandit</a
                  >
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
          </div>
        </b-col>
        <b-col md="4">
          <h5 class="text-white">Recent Posts</h5>
          <div class="posts">
            <div class="post d-flex">
              <img
                src="img/footer-01.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html">
                    Scelerisque varius morbi enim nunc
                  </a>
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
            <div class="post d-flex">
              <img
                src="img/footer-02.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html">
                    Tempor orci eu lobortis elementum
                  </a>
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
            <div class="post d-flex">
              <img
                src="img/footer-03.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html">
                    Bibendum ut tristique et egestas
                  </a>
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
            <div class="post d-flex">
              <img
                src="img/footer-04.jpg"
                class="img-fluid align-self-center"
              />
              <div class="post-info d-flex flex-column justify-content-center">
                <h3 class="post-title">
                  <a href="right-sidebar.html">
                    Mauris cursus mattis molestie a
                  </a>
                </h3>
                <span class="post-date">May 24, 2019</span>
              </div>
            </div>
            <!--post end-->
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="py-3 border-top border-gray" cols="12">
          <p class="my-3 text-center">
            <small>
              © Copyright 2020 - Recipe Journal. All Rights Reserved.
            </small>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: {
        facebook: 'http://facebook.com',
        twitter: 'http://twitter.com',
        linkedin: 'http://linkedin.com',
        youtube: 'http://youtube.com',
        instagram: 'http://instagram.com'
      }
    }
  }
}
</script>
