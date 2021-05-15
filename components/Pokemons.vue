<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-sm-12">
      <h1 class="display-1 font-weight-bold mt-5 text-center">Pokemons</h1>
      <input
        type="text"
        class="form-control shadow"
        placeholder="Search for a Pokemon"
        v-model="search"
      />

      <div
        v-if="filteredPokemons.length !== 0 && search !== ''"
        class="card my-3 shadow"
      >
        <div class="card-body">
          <table class="table table-striped table-hover table-borderless mb-0">
            <tbody>
              <tr v-for="pokemon in filteredPokemons" :key="pokemon.name">
                <td>
                  <NuxtLink
                    :to="`/pokemons/${pokemon.name}`"
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button class="btn btn-default btn-lg">
                      {{ pokemon.name }}
                    </button>
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else class="card my-3 shadow">
        <div class="card-body d-flex justify-content-between">
          <div class="card">
            <div class="card-body d-flex justify-content-around">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                alt=""
              />
            </div>
          </div>

          <div class="card">
            <div class="card-body d-flex justify-content-around">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                alt=""
              />
            </div>
          </div>

          <div class="card">
            <div class="card-body d-flex justify-content-around">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
                alt=""
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex justify-content-around">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredPokemons.length === 0" class="card my-3 shadow">
        <div class="card-body text-danger">
          Oh No! we don't know this pokemon!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: []
    };
  },
  async fetch() {
    let data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1118"
    ).then(res => res.json());
    this.pokemons = data.results;
  },
  computed: {
    search: {
      get() {
        return this.$store.state.pokemons.search;
      },
      set(value) {
        this.$store.commit("pokemons/updateSearch", value);
      }
    },
    filteredPokemons: function() {
      return this.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.card-body > img {
  height: 8rem;
}
.card {
  border-radius: 2rem;
}
.card-body > .card {
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}
a {
  text-decoration: none;
  color: #495057;
}
.form-control {
  border-radius: 1.5rem;
  padding: 2rem;
}

.table > tbody > tr > td {
  border-radius: 1.5rem;
}
.table > tbody > tr > td > a {
  padding: 1rem 2rem;
}
</style>
