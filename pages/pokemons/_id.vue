<template>
  <div v-if="pokemon.sprites" class="container py-5">
    <NuxtLink to="/" class="btn btn-primary mb-3">Go Back</NuxtLink>
    <div class="card shadow">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-lg-6" align="center">
            <img
              :src="pokemon.sprites.other.dream_world.front_default"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-4 mb-3">{{ pokemon.name }}</h1>
            <p>Weight: {{ pokemon.weight }}</p>
            <p>Base Experience: {{ pokemon.base_experience }}</p>
            <p>Height: {{ pokemon.height }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="card shadow">
          <div class="card-body">
            <h1>Stats</h1>
            <div v-for="stat in pokemon.stats" :key="stat" class="my-3">
              <strong>{{ stat.stat.name }}</strong>
              <div
                class="mt-1 progress"
                style="height: 25px;border-radius: 10px;"
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: stat.base_stat + '%' }"
                  :aria-valuenow="`${stat.base_stat}`"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ stat.base_stat }} %
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow mt-3">
          <div class="card-body">
            <h1>Abilities</h1>
            <span
              v-for="ability in pokemon.abilities"
              :key="ability.slot"
              class="badge badge-pill badge-light mx-2 my-3 p-3 shadow-sm"
              >{{ ability.ability.name }}</span
            >
          </div>
        </div>
        <div class="card shadow mt-3">
          <div class="card-body">
            <h1>Types</h1>
            <span
              v-for="type in pokemon.types"
              :key="type.slot"
              class="badge badge-pill badge-light mx-2 my-3 p-3 shadow-sm"
              >{{ type.type.name }}</span
            >
          </div>
        </div>
        <div class="card shadow mt-3">
          <div class="card-body">
            <h1>Forms</h1>
            <span
              v-for="form in pokemon.forms"
              :key="form"
              class="badge badge-pill badge-light mx-2 my-3 p-3 shadow-sm"
              >{{ form.name }}</span
            >
          </div>
        </div>

        <div class="card shadow mt-3">
          <div class="card-body">
            <h1>Game Indices</h1>
            <span
              v-for="game in pokemon.game_indices"
              :key="game"
              class="badge badge-pill badge-light mx-2 my-3 p-3 shadow-sm"
              >{{ game.version.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <div class="card-body">
            <h1>Moves</h1>
            <span
              v-for="move in pokemon.moves"
              :key="move"
              class="badge badge-pill badge-light mx-2 my-3 p-3 shadow-sm"
              >{{ move.move.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: {}
    };
  },
  async fetch() {
    this.pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
    ).then(res => res.json());
  }
};
</script>

<style scoped>
.badge {
  font-weight: 400;
}
.card {
  border-radius: 2rem;
  border: none;
}
</style>
