<template>
  <div class="Details">
    <h1>Show Details</h1>
  </div>

  <div v-for="result in imageUrls" :key="result.show.id" class="show-container">
    <div class="show-img">
      <img :src="result.show.image.original" alt="TV Show Poster" />
    </div>
    <div class="show-details">
      <h2>{{ result.show.name }}</h2>

      <ul>
        <li>Type: {{ result.show.type || "N/A" }}</li>
        <li>Language: {{ result.show.language || "N/A" }}</li>
        <li>
          Genres:
          {{
            result.show.genres ? result.show.genres.join(", ") : "Unavailable"
          }}
        </li>
        <li>
          Runtime:
          {{
            result.show.runtime ? result.show.runtime + " min" : "Unavailable"
          }}
        </li>
        <li>
          Average Runtime:
          {{
            result.show.runtime
              ? result.show.avgruntime + " min"
              : "Unavailable"
          }}
        </li>
        <li>
          Network:
          {{ result.show.network ? result.show.network.name : "Unavailable" }}
        </li>
      </ul>
      <h3>Summary:</h3>
      <p v-if="result.show.summary" v-html="result.show.summary"></p>
      <p v-else>Summary unavailable</p>
    </div>
  </div>
</template>
  

<script>
import axios from "axios";

export default {
  name: "DetailsView",
  data() {
    return {
      imageUrls: [],
    };
  },
  mounted() {
    this.fetchShowDetails();
  },

  methods: {
    async fetchShowDetails() {
      const showId = this.$route.params.showId;
      const res = await axios.get(`https://api.tvmaze.com/shows/${showId}`);

      this.imageUrls = [
        {
          show: res.data,
        },
      ];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

nav {
  padding-bottom: 0;
}

.details {
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  margin: 0 auto;
}

.show-img {
  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.show-img img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  border: solid 2px #d6d7d8;
}

.show-details {
  width: 50vw;
  height: 70vh;
  padding: 20px 50px 20px 0px;
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  margin-bottom: 0;
}

h3 {
  text-align: center;
  margin-bottom: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>