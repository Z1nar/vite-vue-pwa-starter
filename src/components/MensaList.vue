<template>
  <div>
    <h1>Liste aller Mensen</h1>
    <div v-if="loading">Lädt...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="mensaData">
      <li v-for="mensa in mensaData" :key="mensa.id">
        {{ mensa.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '../api.js';

export default {
  data() {
    return {
      mensaData: null,
      loading: true,
      error: null
    };
  },
  async created() {
    try {
      const response = await apiClient.get('/canteens'); // Endpunkt für alle Mensen
      this.mensaData = response.data;
    } catch (err) {
      this.error = 'Fehler beim Laden der Daten: ' + err.message;
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
/* Optional: Füge CSS hinzu, um die Komponente zu stylen */
</style>
