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
    top: 22px;
    left: 20px;
    cursor: pointer;
    width: 200px;
    background-color: #3fb884;
    text-align: center;
    color: #fff;
    font-weight: 500;
    padding: 7.5px;
    border-radius: 2px;
    box-shadow: 0 6px 4px -4px rgba(0, 0, 0, .2);

    &-Selected { 
      margin-bottom: 2px;
    }

    &-Options {
      border-top: 1px solid #31475e;
      margin-top: 10px;
      padding-top: 7px;
      color: #31475e;
      &_item {
        display: block;
        border-radius: 2px;
        margin-bottom: 5px;
        &:hover {
          background-color: #f9fbfd;
        }
      }
    }
  }
</style>