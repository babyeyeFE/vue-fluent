<template>
  <div class="ex-textBox">
    <u-text-box placeholder="Please input" v-model="val" />
    <u-text-box disabled v-model="val2" />
  </div>
</template>

<script>
export default {
  name: 'ex-textBox',
  data() {
    return {
      val: undefined,
      val2: 'Hello world',
    }
  }
}
</script>



