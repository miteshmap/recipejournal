<template>
  <header>
    <b-container class="text-md-center">
      <b-navbar toggleable="md" class="d-md-block">
        <b-navbar-brand href="/">
          <img
            src="@/static/recipe-book-logo.png"
            width="50"
            alt="Logo"
            class="img-fluid"
          />
          Recipe Journal
        </b-navbar-brand>

        <b-navbar-toggle target="navbarNavDropdown"></b-navbar-toggle>

        <b-collapse id="navbarNavDropdown" class="nav-border" is-nav>
          <b-navbar-nav align="left" class="social-links list-inline">
            <li
              v-for="(socialLink, socialLinkIndex) in socialLinks"
              :key="socialLinkIndex"
              title=""
              class="list-inline-item"
            >
              <b-link :href="socialLink">
                <fa-icon :icon="['fab', socialLinkIndex]" />
              </b-link>
            </li>
          </b-navbar-nav>

          <b-navbar-nav align="center">
            <b-nav-item href="#" title="Home">
              Home
            </b-nav-item>
            <b-nav-item href="#" title="Recipes">
              Recipes
            </b-nav-item>
            <b-nav-item href="#" title="tips and tricks">
              Tips & Tricks
            </b-nav-item>
            <b-nav-item href="#" title="">
              Chefs
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav align="right">
            <b-nav-item>
              <p class="navbar-text">Already have an account?</p>
            </b-nav-item>
            <b-nav-item-dropdown text="Login" right>
              <b-dropdown-item>
                <div class="row">
                  <div class="col-md-12">
                    Login via
                    <div class="social-buttons">
                      <a href="#" class="btn btn-fb"
                        ><i class="fa fa-facebook"></i> Facebook</a
                      >
                      <a href="#" class="btn btn-tw"
                        ><i class="fa fa-twitter"></i> Twitter</a
                      >
                    </div>
                    or
                    <form
                      id="login-nav"
                      class="form"
                      role="form"
                      method="post"
                      action="login"
                      accept-charset="UTF-8"
                    >
                      <div class="form-group">
                        <label class="sr-only" for="exampleInputEmail2"
                          >Email address</label
                        >
                        <input
                          id="exampleInputEmail2"
                          type="email"
                          class="form-control"
                          placeholder="Email address"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="exampleInputPassword2"
                          >Password</label
                        >
                        <input
                          id="exampleInputPassword2"
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          required
                        />
                        <div class="help-block text-right">
                          <a href="">Forget the password ?</a>
                        </div>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                          Sign in
                        </button>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" /> keep me logged-in
                        </label>
                      </div>
                    </form>
                  </div>
                  <div class="bottom text-center">
                    New here ? <a href="#"><b>Join Us</b></a>
                  </div>
                </div>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
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

<style lang="scss" scoped>
.navbar {
  .navbar-collapse {
    padding: 15px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #f0f0f0;
    position: relative;
  }

  .navbar-nav {
    // width: 100%;

    > li {
      position: relative;
      font-size: 1em;
      line-height: 2.3em;
      font-weight: 600;
      color: $site-gray-in-white-color;
      > a {
        position: relative;
        font-size: 1em;
        line-height: 2.3em;
        font-weight: 600;
        color: $site-gray-in-white-color;

        &:hover {
          color: $site-green-color;
        }
      }

      &.nav-item:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }
}

.social-links {
  // position: absolute;
  // left: 0;
  // top: 50%;
  transform: translateY(-50%);

  li {
    &:not(:last-child) {
      margin-right: 0.625rem;
    }
    a {
      color: $site-gray-in-white-color;

      &:hover {
        color: $site-green-color;
      }
    }
  }
}
</style>
