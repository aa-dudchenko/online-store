<template>
  <div class="SelectBlock">

    <p 
    class="SelectBlock-Selected"
    @click="areOptionsVisible = !areOptionsVisible"
    >{{ selected }}</p>
    <div
     class="SelectBlock-Options"
     v-if="areOptionsVisible"
     >
      <span 
      class="SelectBlock-Options_item"
      v-for="option of options"
      :key="option.value"
      @click="selectOption(option)"
      >
        {{ option.name }}
      </span>
    </div>

  </div>
</template>


<script>
export default {
  name: "SelectBlock",
  
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default () {
        return ''
      }
    }
  },

  data () {
    return {
      areOptionsVisible: false
    }
  },

  methods: {
    selectOption (option) {
      this.$emit('selectOption', option)
      this.areOptionsVisible = false
    },

    closeSelect () {
      this.areOptionsVisible = false
    }
  },

  mounted () {
    document.addEventListener( 'click', this.closeSelect.bind(this), true )
  },

  beforeDestroy () {
    document.removeEventListener( 'click', this.closeSelect )
  }
}
</script>


<style lang="scss">
@import "../assets/styles/styles.scss";

  .SelectBlock {
    position: absolute;
    left: 20px;
    top: 0;
    cursor: pointer;
    width: 100px;
    text-align: center;
    // margin: 0 auto;
    &-Selected { 
      border: solid 1px #000;
      margin-bottom: 2px;
    }
    &-Options {
      border: solid 1px #000;
      &_item {
        display: block;
        &:hover {
          background-color: gray;
        }
      }
    }
  }
</style>