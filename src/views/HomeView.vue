<template>
  <div class="home">
    <h1>TV Show Search</h1>
    <form id="searchForm">
      <input type="text" placeholder="Enter a title..." name="query" />
      <button>Search</button>
    </form>

    <div v-if="imageUrls.length > 0" class="image-container">
      <div
        v-for="result in imageUrls"
        :key="result.show.id"
        class="image-wrapper"
      >
        <img :src="result.show.image.medium" alt="TV Show Poster" />
        <h2>{{ result.show.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
}

.image-wrapper {
  margin: 30px;
}

img {
  border-radius: 10px;
  border: solid 2px #d6d7d8;
}
</style>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      imageUrls: [],
    };
  },
  mounted() {
    const form = document.querySelector("#searchForm");
    form.addEventListener("submit", this.handleFormSubmit);
  },
  methods: {
    async handleFormSubmit(e) {
      e.preventDefault();
      const searchTerm = e.target.elements.query.value;
      const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
      );

      this.imageUrls = res.data
        .filter((result) => result?.show?.image?.medium)
        .map((result) => ({
          show: result.show,
        }));
    },
  },
};
</script>
