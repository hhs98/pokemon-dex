<template>
  <li class="list-group-item">
    <NuxtLink :to="`/pokemons/${pokemon_id}`">
      {{ pokemon.name }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: ["pokemon"],
  data() {
    return {
      id: ""
    };
  },
  computed: {
    pokemon_id: function() {
      let id = this.$props.pokemon.url;
      let splitted = id.split("/");
      let length = splitted.length;
      return splitted[length - 2];
    }
  }
};
</script>

<style scoped></style>
