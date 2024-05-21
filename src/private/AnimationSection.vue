<template>
    <div class="inline-flex">
        <div class="word "></div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      words: [
        { text: 'Advance', growShrink: true },
        { text: 'Authentic', growShrink: true },
        { text: 'Affirm', growShrink: true },
        { text: 'Amicable', growShrink: true },
        { text: 'Accencis', growShrink: false }
      ],
      part: '',
      i: 0,
      offset: 0,
      forwards: true,
      skip_delay: 15,
      speed: 200,
      intervalId: null // Add intervalId to store the interval reference
    };
  },
  mounted() {
    this.wordflick();
  },
  methods: {
    wordflick() {
      this.intervalId = setInterval(() => {
        const word = this.words[this.i];
        if (this.offset >= word.text.length) {
          if (word.growShrink) {
            this.forwards = !this.forwards;
          } else {
            this.i++;
            this.offset = 0; // Reset offset when transitioning to the next word
            if (this.i >= this.words.length) {
              clearInterval(this.intervalId); // Stop animation after the last word
              return;
            }
          }
        }

        this.part = word.text.substr(0, this.offset);
        this.offset += this.forwards ? 1 : -1;
        this.$el.querySelector('.word').innerText = this.part;
      }, this.speed);
    }
  }
};
</script>



<style></style>