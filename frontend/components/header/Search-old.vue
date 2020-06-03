<template>
  <div class="search">
    <b-button size="sm" class="mb-2">
      <fa-icon :icon="['fas', 'search']" />
    </b-button>

    <form>
      <div class="input-group">
        <input
          type="text"
          class="form-control input-sm search-field"
          placeholder="Search..."
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search {
  padding: 5px 0;
  height: 2.5em;
  position: relative;
  line-height: 22px;

  .input-group {
    position: absolute;
    width: 0px;
    -webkit-transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
    height: 30px;
    line-height: 18px;
    border-radius: 1px;
    visibility: hidden;
    top: 5px;
    right: 31px;
  }

  &:hover .input-group,
  .search-field:focus & {
    visibility: visible;

    width: 200px;
    margin-left: 0px;
  }

  input {
    padding: 0px 5px;
    height: 32px;
  }
}

// .search .btn {
//   height: 30px;
//   position: absolute;
//   right: 0;
//   top: 5px;
//   border-radius: 1px;
// }
</style>
