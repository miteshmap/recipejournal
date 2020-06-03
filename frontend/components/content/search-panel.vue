<template>
  <b-container>
    <b-row>
      <b-col>
        <b-input-group size="lg" class="mb-2">
          <b-input-group-prepend>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Large text input with switch"
          ></b-form-input>
          <b-input-group-append is-text>
            <b-button class="mr-n2">
              <fa-icon :icon="['fas', 'search']" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>
